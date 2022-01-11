function LessonsLearned() {
  const lessonsLearned = [
    {
      key: 1,
      title: "Emmet Shortcut",
      text: "Emmet shortcut for a functional component = _rfce. You can also use wo the underscore but it imports react, which you no longer need",
    },
    {
      key: 2,
      title: "Destructuring Props",
      text: "really cool the Header component is passed a prop called text. Instead of using function Header(props), and then accessing via {props.text} you can instead use function Header({ text }) and just access it below LIKE SO { text }, instead of {props.text}",
    },
    {
      key: 3,
      title: "Default props and propTypes",
      text: "see example in Header Component and PROPTYPES, which adds cool type checking to props.Note that you have to import proptypes and it is weird stuff like bool not boolean, but this autocomples if you have imported it",
    },
    {
      key: 4,
      title: "Use index for keys?",
      text: "Tried using index from the array as a key and didnt need to use the key values",
    },
    {
      key: 5,
      title: "Style global or component level",
      text: "Found out that in addition to using individual styles for each component, that you can also use one global style sheet on index.js",
    },
    {
      key: 6,
      title: "State: Local State",
      text: "use local state when that state is used only in the component and not appwide",
    },
    {
      key: 7,
      title: "Setting state with use State",
      text: "Obviously cant just change the state. you have to call setwhatever you called it when you deconstructed it ... [bs, setBs]. If you need access to the previous state, it is auto provided to the setWhatever, and you just access it like so... setWhatever((prevState)=> {return prevState + 1})",
    },
    {
      key: 4,
      title: "Dont Forget React DevTools!!!",
      text: "They are awesome, show component tree, hooks, state, props, awesome! Less ConsoleLogs",
    },
    {
      key: 4,
      title: "Passing a whole object as a prop?",
      text: "You have to look at the <FeedbackItem key={item.id} item={item} /> in the app to understand, but AS I WAS MAPPING THE feedback item list,  passed the key as a prop BUT THEN I also passed it the whole item that I was mapping, INCLUDing the key, text, and whatever",
    },
    {
      key: 4,
      title: "Making and using a card component",
      text: "The reusable card is handy to see the patter look at Card in shared and feedback item where it is used",
    },
    {
      key: 4,
      title: "Styling and the reverse card",
      text: "Watch the latter part of this video  ....https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29767748#questions   "
    },
    {
      key: 4,
      title: "Prop Drilling..dont..use useContext instead",
      text: "If you find yourself prop drilling, which is passing a function that modifies state down through the component chain... For example handleDelete whatever, and whatever lives in App, but you need to pass the function down  from app because the state lives there to the button which lives several cards down, and also PASS THE ID OF THE ITEM YOU ARE DELETING BACK UP TO handleDelete it is possible, but I will later find out that useContext is better for that",
    },
    {
      key: 4,
      title: "Using Font Awesome via React Icons",
      text: "Font Awesome is now a part of React Icons ;)...so... import { name of the specific icon you want to use} from 'react-icons/fa'...Something really cool was that this fa icon is added inside of a button, BUT THE STYLING SHOWS IT JUST AS AN X, BUT IT IS A BUTTON then this gets lengthy so maybe see video here https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29767758#questions",
    },
    {
      key: 4,
      title: "Using an inline function in button click handlers",
      text: "I have in the past tried to put an inline function in a button handler and it didnt work, like so: <button onClick={console.log('shit')}>   This logs as the component mounts but not as you click the button, the correct way is to put the fat arrow first like so: <button onClick={()=>console.log('shit')}",
    },
    {
      key: 4,
      title: "Confirmation...ie are you sure you want to delete?",
      text: "An example of this is in the deleteFeedback function in App.js, gives a little windows confirm box",
    },
    {
      key: 4,
      title: "Array.Filter... keep evertything except the one I am deleting",
      text: "An example of this is in the deleteFeedback function in App.js, even better it is also using SET STATE",
    },
    {
      key: 4,
      title: "Array.reduce...Good Example",
      text: "In the feedback stats component the variable totalRatingPoints is calculated using array.reduce() The accummulator is a bit confusing, but what it is is something that tracks whatever you are looping through with reduce NOTE IT is initialed at the the very end here }, 0)...the zero                             in this instance, each time it loops it is adding the + current.rating to the accumulator. These will be divided by the length of the array lower down to give an average",
    },
    {
      key: 4,
      title: "isNaN()",
      text: "In the feedback Stats component, if there no ratings yet, you will not have a number to display your average. So average rating on the app will be displayed as NaN,...note that second N is capital if you call isNaN(). So a ternary is used to show a zero in that case           like so {isNaN(BetterTotalRatingPoints) ? 0 : BetterTotalRatingPoints}"
    },
    {
      key: 4,
      title: "Remove Trailing Zeros",
      text: "In the feedback Stats component, is mutated if there are trailing zeroes, i didnt take the time to understand it but it is the last part of this....starting with replace()...                      BetterTotalRatingPoints = BetterTotalRatingPoints.toFixed(1).replace(/[.,]0$/, '')",
    },
    {
      key: 4,
      title: "Rounding off to a certain decimal place",
      text: "In the feedback Stats component, BetterTotalRatingPoints = BetterTotalRatingPoints.toFixed(1) is used to round off to one decimal place it is also later ran through regex to remove trailing zeroes but that is explained in the card above, Also THe calculated differently averages in a cool way. takes the whole reduce function and divides it"
    },
    {
      key: 4,
      title: "Forms",
      text: "Forms typically have one state for each button/input/control ... for the input I have established a state (text) for the input box ... an onChange handler uses the setText to update each time a key is pressed IMPORTANT =>=> The input element has a value property that is set to Text ...I think that has caused headaches before ... the button is a standard reusable component with some premade classes, and also has validation that disables the button until 10 characters are entered ... The rating select is its own element, it gets data from whichever radio is selected in the child components, I made a new lesson learned below because I have had probs with this before ...  ",
    },
    {
      key: 4,
      title: "Passing down a function as prop that receives data from the child",
      text: "The Feedback Form passes down a function that receives the number of the radio button selected, via the select function which it passes to Rating select.... There was a very interesting problem where he passed state up, and it was one behind, he had to change from selected state to current.target.value because it was one behind ... he tried select (selected) which is selecting state, and was one late had to change to current.target.value",
    },
    {
      key: 4,
      title: "Easy way to convert string to a number +12",
      text: "The radio buttons were given string values to keep up which was which, and he easily converted the string 7, to a number with a plus sign, .....    +e.currentTarget.value",
    },
    {
      key: 4,
      title: "Adding a new entry to existing state",
      text: "STUMBLED HERE... wanted to add new feedback to existing feedback, was able to see the new feedback up in app and it was coming from a lower component, but couldnt do it successfully .... the problem was that I was trying to update the old state and mutate it like setFeedback((prev)=> feedback += newfeedback)....THE SOLUTION was to spread out the existing feedback state and then add the new feedback to it like so setFeedback([...feedback, newFeedback]) ... note that this added the newFeedback to the end of the feedback array, he did it backwards, setFeedback([...feedback, newFeedback]) and it added it to the beginning....cool ... NOTE HAD A LOT OF PROBLEMS HERE ... i WAS used to taking the previous state and adding new shit to it AND I COULDNT MAKE IT WORK     setFeedback(prev => prev += newFeedback)   this was close but when I looked at the docs it also seemed right but I had to use concat like so and then it worked       setFeedback(prev => prev.concat(newFeedback))",
    },
    {
      key: 4,
      title: "Framer",
      text: "There is an example in feedback list.jsx but just watch this here       https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29767836#questions",
    },
    {
      key: 4,
      title: "React Router",
      text: " obviously start with   import { BrowserRouter as Router, Route, Routes } from react-router-dom  ... NOTE THAT THIS IS REACTROUTERDOM VERSION 6   then gotta surround all Route tags with routes   and the pass each Route tag a path NOTE that the root uses path= exact blabla if you just use root / then root page will show up on every page because the path matches  ... the pass an element IN JSX FORM ... this was different before it was component not element  ",
    },
    {
      key: 4,
      title: "Rounding off n decimal place",
      text: "Tried usm tvalues",
    },
    {
      key: 4,
      title: "Rounding off n decimal place",
      text: "Tried usm tvalues",
    },
    {
      key: 4,
      title: "Rounding off n decimal place",
      text: "Tried usm tvalues",
    },
    {
      key: 4,
      title: "Rounding off n decimal place",
      text: "Tried usm tvalues",
    },
  ];
  return (
    <div className="container">
      <h2>Lessons Learned</h2>
      <ul>
        {lessonsLearned.map((lesson, index) => (
          <div key={index} className="card">
            <h3>{lesson.title}</h3>
            <li>{lesson.text}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default LessonsLearned;
