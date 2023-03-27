import React from 'react'
import { useParams ,Link} from 'react-router-dom'
import upvo from './upico.png'
import downvo from './downico.png'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
const QuestionsDetails = () => {

  const { id } = useParams()
  console.log(id)
  var questionsList= [{
    _id: '1',
    upvotes: 3,
    downvotes:2,
    noOfAnswers:2,
    questionTitle:"what is a function?",
    questionBody:"it meant to be",
    questionTags:["java","node js","react js","mongo db"],
    userPosted:"mano",
    userId:1,
    askedOn:"jan 1",
    answer: [{
      answerBody:"Answer",
      userAnswered:'kumar',
      answeredOn:"jan 2",
      userId: 2, 
    }]
    },{
      _id: '2',
      upvotes: 3,
      downvotes:2,
      noOfAnswers:0,
      questionTitle:"what is a function?",
      questionBody:"it meant to be",
      userId:1,
      questionTags:["javascript","R","python"],
      userPosted:"mano",
      askedOn:"jan 1",
      answer: [{
        answerBody:"Answer",
        userAnswered:'kumar',
        answeredOn:"jan 2",
        userId: 2, 
      }] 
      },{
        _id: '3',
        upvotes: 3,
        downvotes:2,
        noOfAnswers: 0,
        userId:1,
        questionTitle:"what is a function?",
        questionBody:"it meant to be",
        questionTags:["javascript","R","python"],
        userPosted:"mano",
        askedOn:"jan 1",
        answer: [{
          answerBody:"Answer",
          userAnswered:'kumar',
          answeredOn:"jan 2",
          userId: 2, 
        }] 
       
    }]
  return (
    <div className='questions-details-page'>
{
  questionsList === null ?
  <h1>Loading.......</h1> :
  <>
  {
    questionsList.filter(question => question._id === id).map(question =>(
     <div key={question._id}>
      {
        console.log(question)
      }
      <section className='question-details-container'>
         <h1>{question.questionTitle}</h1>
      <div className='question-details-container-2'>
       <div className="question-votes">
           <img src={upvo} alt="" width='18' />
           <p>{question.upvotes - question.downvotes}</p>
           <img src={downvo} alt="" width='18' />
        </div>
        <div style={{width:"100%"}}>
            <p className='question-body'>{question.questionBody}</p>
            <div className='question-details-tags'>
              {
                question.questionTags.map((tag)=>(
                  <p key={tag}>{tag}</p>
                ))
              }
            </div>
            <div className="question-action-user">
              <div>
                <button type='button'>Share</button>
                <button  type='button'>Delete</button>
              </div>
              <div >
               <p>asked {question.askedOn}</p>
               <Link to={`/User/${question.userId}`}className='user-link' style={{color:'#0086d8'}}>
                <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase( )}</Avatar>
                <div>
                  {question.userPosted}
                </div>
               </Link>
              </div>
            </div>
        </div>
      </div>
      </section>
     </div>

    ))
  }
  </>
}

    </div>
  )
}

export default QuestionsDetails