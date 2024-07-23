import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive offers!</h1>
        <p>Subscribe to our News Letter and stay updated </p>
        <form action='#' method='post' >
            <input placeholder='your Email Id' name='email' />
            <button type='submit'>Subscribe</button>
        </form>
    </div>
  )
}
