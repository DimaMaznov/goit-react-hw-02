import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

export default function App() {
    
    const [properties, setProperties] = useState(() => {
        const saved = localStorage.getItem("feedback");
        return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
    });


    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(properties));
    }, [properties]);

    const totalFeedback = properties.good + properties.neutral + properties.bad;
    const positiveFeedback = Math.round((properties.good / totalFeedback) * 100)

    const updateGood = () => { 
        setProperties(prevState => ({
            ...prevState,
            good: prevState.good + 1
        }));
    };

    const updateNeutral = () => { 
        setProperties(prevState => ({
            ...prevState,
            neutral: prevState.neutral + 1
        }));
    };
    
    const updateBad = () => { 
        setProperties(prevState => ({
            ...prevState,
            bad: prevState.bad + 1
        }));
    };

    const clickReset = () => {
        setProperties({
            good: 0,
            neutral: 0,
            bad: 0
        });
    };

    return (
        <div>
            <Description/>
            <Options updateGood={updateGood} updateNeutral={updateNeutral} updateBad={updateBad} clickReset= {clickReset} totalFeedback={totalFeedback} />
          { totalFeedback> 0 ?(<Feedback good={properties.good} neutral={properties.neutral} bad={properties.bad} totalFeedback={totalFeedback} positive={positiveFeedback} />) :(<Notification/>) }
        </div>
    );
}
