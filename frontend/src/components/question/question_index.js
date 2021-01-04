import React from 'react'
import {Link} from 'react-router-dom'
import '../../assets/stylesheets/bulletin_board.css'




class QuestionIndex extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return(
            <div className='questionIndex'>
                {this.props.questions.map((question, i) => {
                    // console.log(question._id)
                    return(
                        <div key={i} className='individualQuestion'>
                            <div className='individualQuestionLink'>Username: {question.user.username}</div>
                            <div className='individualQuestionUser'>
                                Case: <Link to={`/question/${question._id}`}>{question.subject}</Link>
                            </div>
                        </div>
                        
                    )
                })}
                
            </div>
        )
       
    }
}

export default QuestionIndex