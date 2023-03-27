import React from 'react'
import './AskQuestion.css'
import { useNavigate } from 'react-router-dom'
const AskQuestions = () => {
 
  return (      
          <div className="ask-question">
              <div className="ask-ques-container">
<h1>Ask A Public Question</h1>


<form >
  <div className="ask-form-container">
<label htmlFor="ask-ques-title">
  <h4>Title</h4>
  <p>Be Spacific You Are Asking a Question to the Others</p>
  <input type="text"  id='ask-ques-title'placeholder='who are a creater of a computer?'/>
  </label>

  <label htmlFor="ask-ques-body">
  <h4>Body</h4>
  <p>Include All Essential Things to answer your Question</p>
  <textarea name="" id="ask-ques-body" cols="30" rows="10"></textarea>
  </label>

  <label htmlFor="ask-ques-tags">
  <h4>Tags</h4>
  <p>Add Tags to describe the question</p>
  <input type="text"  id='ask-ques-tags'placeholder='Ex: (science computer invention)'/>
  </label>

  </div>
  <input type="submit" value="Review Your Question" className='review-button'/>
</form>
              </div>
          </div>
  )
}

export default AskQuestions