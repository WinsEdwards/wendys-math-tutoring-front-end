const aboutTitle = "Welcome to Wendy's Math Tutoring"

const aboutTxt = "With over 20 years of teaching experience and a masters degree in Mathematics, I bring my expertise as a University of Tampa Mathematics Instructor and former Florida Junior High/High School Math Teacher to help students like you succeed. Whether you’re tackling advanced calculus in college or working through high school algebra, I’m here to make math clear, approachable, and—dare I say—enjoyable!\n\nI’ve helped hundreds of students conquer their math challenges, raise their test scores, gain acceptance into top colleges, and launch successful careers in fields like medicine, law, business, and more. Now, it’s your turn!"

export default function About() {
    return (
        <section id='about'>
            <div className='container'>
               <h1 className='about-title'>
                {aboutTitle}
                </h1> 
                <p1 className='about-content' style={{ whiteSpace: 'pre-wrap' }}>
                    {aboutTxt}
                </p1>
            </div>
        </section>
    )
}