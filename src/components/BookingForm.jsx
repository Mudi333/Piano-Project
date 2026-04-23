import { useState } from "react"

function BookingForm() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [lessonType,setLessonType] = useState("")
    const [date,setDate] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking submitted:\nName: ${name}\nEmail: ${email}\nLesson Type: ${lessonType}\nDate: ${date}`)
        // Here you would typically send the data to a server or API
    };

  return (
    
    <div>BookingForm
<form onSubmit= {handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="lessonType">Lesson Type:</label>
            <select
                id="lessonType"
                value={lessonType}
                onChange={(e) => setLessonType(e.target.value)}
            >
                <option value="">Select a lesson type</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
        </div>
        <div>
            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
        </div>
        <button type="submit">Submit Booking</button>
    </form>

    </div>
  )
}

export default BookingForm