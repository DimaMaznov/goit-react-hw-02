export default function Options({ updateGood, updateNeutral, updateBad, clickReset,totalFeedback }) {
    return (
        <div>
            <button onClick={updateGood}>Good</button>
            <button onClick={updateNeutral}>Neutral</button>
            <button onClick={updateBad}>Bad</button>
           { totalFeedback > 0 && <button onClick={clickReset}>Reset</button>}
        </div>
    );
}