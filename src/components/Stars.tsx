import { Star } from "./Star";
import "./stars.css";

type StarsProps = {
    count: number;
  }

export const Stars = (props: StarsProps) => {
    
   const { count } = props;

   if (count < 1 || count > 5 || isNaN(count)) {
    return null;
    }

    const stars = [];

    for (let i = 0; i < count; i++) {
        stars.push(<li key={i}><Star /></li>);
    }

    return (
        <>
            <ul className = "card-body-stars u-clearfix">
                    {stars.length > 0 ? stars : <></>}
            </ul>
        </>      
    );
};