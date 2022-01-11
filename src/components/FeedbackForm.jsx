import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";

function FeedbackForm( { handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(" "); //message for why the button is disabled
  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {

    if (text === '') {
        setBtnDisabled(true)
        setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
        setMessage('Text must be at least 10 characters')
        setBtnDisabled(true)
    } else {
        setBtnDisabled(false)
        setMessage(null)
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault()
      if (text.trim().length > 10) {
          const newFeedback = {
              text,
              rating
          }
          ////gonna do an add feedback ,in app try it yourself
          ////gonna do an add feedback ,in app try it yourself
          ////gonna do an add feedback ,in app try it yourself
          ////gonna do an add feedback ,in app try it yourself
          ////gonna do an add feedback ,in app try it yourself
          ////gonna do an add feedback ,in app try it yourself
          ////gonna do an add feedback ,in app try it yourself
        console.log('from form',newFeedback)
        handleAdd(newFeedback)
        setText('')
      }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating)=> (setRating(rating))}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write your review here..."
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
