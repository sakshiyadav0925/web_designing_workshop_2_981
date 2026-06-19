function calculateGrades() {
        // 1. Take number of subjects from user
        let numSubjects = prompt("Enter the number of subjects:");
        numSubjects = parseInt(numSubjects);

        // Validation
        if (isNaN(numSubjects) || numSubjects <= 0) {
            alert("Please enter a valid number of subjects.");
            return;
        }

        let totalMarks = 0;
        let marksArray = [];

        // 2. Use a loop to take marks for each subject
        for (let i = 1; i <= numSubjects; i++) {
            let mark = prompt("Enter marks for subject " + i + " (out of 100):");
            mark = parseFloat(mark);

            if (isNaN(mark) || mark < 0 || mark > 100) {
                alert("Invalid input. Please enter marks between 0 and 100.");
                i--; // Decrement loop to retry this subject
                continue;
            }

            totalMarks += mark;
        }

        // 3. Calculate Average
        let average = totalMarks / numSubjects;

        // 4. Use if-else conditions to display Grade and Pass/Fail
        let grade = "";
        let status = "";

        if (average >= 90) {
            grade = "A+";
        } else if (average >= 75) {
            grade = "A";
        } else if (average >= 60) {
            grade = "B";
        } else if (average >= 50) {
            grade = "C";
        } else if (average >= 40) {
            grade = "D";
        } else {
            grade = "F";
        }

        status = (average >= 40) ? "PASS" : "FAIL";
        let statusClass = (status === "PASS") ? "pass" : "fail";

        // 5. Display the result dynamically on the webpage (DOM Manipulation)
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <h3>Results:</h3>
            <p><strong>Total Marks:</strong> ${totalMarks}</p>
            <p><strong>Average Marks:</strong> ${average.toFixed(2)}</p>
            <p><strong>Grade:</strong> ${grade}</p>
            <p><strong>Status:</strong> <span class="${statusClass}">${status}</span></p>
         `;
    }
