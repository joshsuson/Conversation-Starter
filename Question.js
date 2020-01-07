class Question {
    constructor() {
        this.questions = [
        "What makes you feel confident?",
        "What makes you cry?",
        "What do you like best about being male/female?",
        "Have you ever done anything illegal?",
        "Who do you need to thank?",
        "What group would you like to join?",
        "What is your favorite blog/website?",
        "What rule do you think needs to be broken?",
        "Who was your best friend when you were a kid? What were they like?",
        "Where do you find your worth?",
        "What do you love about your life?",
        "What speaks to you?",
        "You've run away from home to join the circus. What is your job?",
        "What discourages you?",
        "What is your greatest need?",
        "What is one thing somone can do to build a friendship with you?",
        "What is something on your list you want for Christmas?"
        ]
    }

    getRandomQuestion () {
        return this.questions[Math.floor(Math.random() * this.questions.length)];
    }
}