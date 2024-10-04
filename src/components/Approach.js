const approachTitle = "How I Help You Succeed"

const approachTxt = "Unlike many tutors, I understand what it’s like to struggle with math because I’ve been there myself. Having overcome my own learning disabilities, I’ve developed creative techniques to make math make sense—no matter your starting point.\n\nEach session is customized to your unique needs. During our first meeting, I’ll take the time to understand how you learn, and from there, I’ll tailor my teaching approach to fit your learning style, attention span, and retention abilities. You’ll be surprised how much easier math becomes when it’s taught in a way that works for you.\n\nMany students come to me saying, \“I’m just not good at math,\” but I believe differently. Math isn't about memorizing formulas—it’s about understanding. Math teachers teach the way they learn, while I teach the way you learn. My goal is to help you \"get it\" for the first time and build your confidence along the way."

const approachContent = [
    {
        id: 1,
        title: "How I Help You Succeed",
        txt: "Unlike many tutors, I understand what it’s like to struggle with math because I’ve been there myself. Having overcome my own learning disabilities, I’ve developed creative techniques to make math make sense—no matter your starting point.\n\nEach session is customized to your unique needs. During our first meeting, I’ll take the time to understand how you learn, and from there, I’ll tailor my teaching approach to fit your learning style, attention span, and retention abilities. You’ll be surprised how much easier math becomes when it’s taught in a way that works for you.\n\nMany students come to me saying, \“I’m just not good at math,\” but I believe differently. Math isn't about memorizing formulas—it’s about understanding. Math teachers teach the way they learn, while I teach the way you learn. My goal is to help you \"get it\" for the first time and build your confidence along the way."
    },
    {
        id: 2,
        title: "Interactive, Remote Learning—No Traffic, No Hassle",
        txt: "All tutoring sessions are held via Zoom for your convenience. You can share your screen, upload photos of assignments, and I’ll use a digital pen to walk you through problems in real time. Each session is an hour long and takes place wherever you are—whether it’s your dorm, your home, or your favorite quiet spot. You’ll get the focused help you need without the headache of fighting traffic."
    },
    {
        id: 3,
        title: "Test Prep with a Focus on Strategy",
        txt: "For ACT, SAT, or GRE prep, I focus on strategies that help you score higher, not just cramming more math. You’ve been learning math for years, and now it’s time to learn how to use it on the test. From reminders on key concepts to proven test-taking techniques like eliminating wrong answers and knowing when to skip problems, I’ll equip you with the tools to maximize your score."
    },
    {
        id: 4,
        title: "What Sets Me Apart",
        txt: "With Wendy’s Math Tutoring, you’re always working with me—not just any tutor. I’m dedicated to building a relationship that supports your academic growth and transforms how you see math. My approach doesn’t just change test scores—it changes family dynamics, bringing relief to students and parents alike as math becomes less of a burden and more of a success story."
    }
]

export default function Approach() {
    const approachContentArray = approachContent.map(approach =>
        <div key={approach.id}>
            <h1>{approach.title}</h1>
            <p>{approach.txt}</p>
        </div>
    )

    return(
        <section id='approach'>
            <div className='container'>
               <div>{approachContentArray}</div>
            </div>
        </section>
    )
}