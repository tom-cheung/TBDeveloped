import {connect} from 'react-redux';
import {receiveResponse} from '../../actions/responses_actions';
import AnswerIndex from '../answer/answer_index';
import {postChat} from '../../actions/messages_actions';

const mapStateToProps = (state, ownProps) => {
    
    return({
    questionID: ownProps.questionID,
    responses: ownProps.responses,
    username: ownProps.username,
    posterID: ownProps.currentUserID,
    })
}

const mapDispatchToProps = (dispatch) => ({
    fetchAnswers: (responses) => dispatch(receiveResponse(responses)),
    createChat: (newChat) => dispatch(postChat(newChat))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndex)

