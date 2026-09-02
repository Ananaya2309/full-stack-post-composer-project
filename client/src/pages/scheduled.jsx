import { useEffect, useState } from "react";
import api from "../api";
import "../css/scheduled.css";

function Scheduled() {
  const [posts, setPosts] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchScheduledPosts();
  }, []);

  const fetchScheduledPosts = async () => {
    try {
      const response = await api.get("/posts");

      const scheduled = response.data.filter(
        (post) => post.status === "Scheduled"
      );

      setPosts(scheduled);
    } catch (error) {
      console.log(error);
    }
  };

  // Month information
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Previous month
  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // Next month
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Format date as YYYY-MM-DD
  const formatDate = (date) => {
    const d = new Date(date);

    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");

    return `${y}-${m}-${day}`;
  };

  // Check today's date
  const today = formatDate(new Date());

  // Get posts for a particular day
  const getPostsForDate = (day) => {
    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    return posts.filter((post) => post.scheduleDate === dateString);
  };

  // Select date
  const handleDateClick = (day) => {
    const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    setSelectedDate(dateString);
  };

  const selectedPosts = posts.filter(
    (post) => post.scheduleDate === selectedDate
  );

  // Create calendar cells
  const calendarDays = [];

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // Actual days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="scheduled-page">

      <div className="scheduled-header">
        <h1>Scheduling Calendar</h1>
        <p>See all scheduled content by date.</p>
      </div>

      <div className="calendar-container">

        {/* Calendar Header */}
        <div className="calendar-header">

          <button onClick={previousMonth}>
            ‹
          </button>

          <h2>
            {monthName} {year}
          </h2>

          <button onClick={nextMonth}>
            ›
          </button>

        </div>

        {/* Week Names */}
        <div className="week-days">

          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>

        </div>

        {/* Calendar */}
        <div className="calendar-grid">

          {calendarDays.map((day, index) => {

            if (!day) {
              return (
                <div
                  className="calendar-cell empty"
                  key={index}
                ></div>
              );
            }

            const dateString = `${year}-${String(month + 1).padStart(
              2,
              "0"
            )}-${String(day).padStart(2, "0")}`;

            const dayPosts = getPostsForDate(day);

            const isToday = dateString === today;

            const isSelected = dateString === selectedDate;

            return (
              <div
                key={day}
                className={`calendar-cell ${
                  isToday ? "today" : ""
                } ${isSelected ? "selected" : ""}`}
                onClick={() => handleDateClick(day)}
              >

                <div className="day-number">
                  {day}
                </div>

                {/* Scheduled posts */}
                <div className="calendar-posts">

                  {dayPosts.map((post) => (
                    <div
                      className="calendar-post"
                      key={post._id}
                    >
                      <span>
                        {post.scheduleTime || "Time not set"}
                      </span>

                      <strong>
                        {post.title}
                      </strong>
                    </div>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Selected Date */}
      {selectedDate && (
        <div className="selected-section">

          <h2>
            Scheduled Posts
          </h2>

          <p className="selected-date">
            {new Date(
              selectedDate + "T00:00:00"
            ).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          {selectedPosts.length > 0 ? (

            selectedPosts.map((post) => (
              <div
                className="scheduled-card"
                key={post._id}
              >

                <div>
                  <h3>{post.title}</h3>

                  <p>{post.description}</p>

                  <small>
                    Platforms:{" "}
                    {post.platforms?.join(", ")}
                  </small>
                </div>

                <div className="post-time">
                  🕐 {post.scheduleTime || "Not set"}
                </div>

              </div>
            ))

          ) : (

            <div className="no-scheduled">
              No posts scheduled for this date.
            </div>

          )}

        </div>
      )}

    </div>
  );
}

export default Scheduled;