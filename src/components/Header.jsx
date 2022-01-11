import PropTypes from "prop-types"
function Header() {
    return (
        <header >
            <h2>OK. So this app was cool and used only useState. It was moving to where useState was gonna be replaced with useContext .... Many of the lessons Learned here would have been messed up ... so I just started in feedbackapppart2 because I wanted my lessons learned to be preserved. Click on the stuff above to get to lessons learned</h2>
        </header>
    )
}

Header.defaultProps = {
    text: 'default props.text if none is provided',
    anotherUselessProp: 'I wont be used',
    fakeNumberProp: 23,
    fakeBooleanProp: false
}
Header.propTypes = {
    text: PropTypes.string,
    anotherUselessProp:  PropTypes.string,
    fakeNumberProp: PropTypes.number,
    fakeBooleanProp:  PropTypes.bool


}

export default Header
