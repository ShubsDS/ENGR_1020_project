document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#jeopardy-board button");
    const questionDisplay = document.getElementById("question-display");
    const questionText = document.getElementById("question-text");
    const userAnswer = document.getElementById("user-answer");
    const submitAnswer = document.getElementById("submit-answer");
    const correctAnswer = document.getElementById("correct-answer");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            questionText.textContent = button.dataset.question;
            correctAnswer.textContent = `Correct Answer: ${button.dataset.answer}`;
            questionDisplay.style.display = "block";
            correctAnswer.style.display = "none";
        });
    });

    submitAnswer.addEventListener("click", () => {
        correctAnswer.style.display = "block";
    });
});
