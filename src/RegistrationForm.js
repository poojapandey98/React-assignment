export default function RegistrationForm() {
    return (

        <form className="registration-form" action ="#" method="POST">
        <div>
            <label for="first_name">First Name* </label>
            <input type="text" id="first_name" name="first_name" required/>
        </div>
        <div>
            <label for="last_name">Last Name*</label>
            <input type="text" id="last_name" name="last_name" required/>
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" />
        </div>
        <div>
            <label for="study">Field of Study:</label>
            <input type="text" id="study" name="study"/>
        </div>
        <div>
            <label for="start_date">Start Date:</label>
            <input type="date" id="start_date" name="start_date"/>
        </div>
        <div>
            <label for="end_date">End Date:</label>
            <input type="date" id="end_date" name="end_date"/>
        </div>
        <div>
            <label for="current_salary">Current Salary:</label>
            <input type="number" id="current_salary" name="current_salary" step="100" min="0"/>
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="4"></textarea>
        </div>
        <div>
            <input type="submit" value="Submit"/>
        </div>
    </form>
    )
    }