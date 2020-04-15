import style from "../../common/Pagination/Pagination.module.css"
import React from "react";

const Paginator = (props) => {
    //you can use State instead of props.setCurrentPortion;
    //let [currentPortion, setCurrentPortion] = useState(1);

    let pagesCount = Math.ceil(props.itemsCount / props.pageSize);
    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let leftPortion = (props.currentPortion - 1) * props.portionSize;
    let rightPortion = props.currentPortion * props.portionSize;

        return <div>
        {props.currentPortion > 1 ? <button onClick={() => {
            props.setCurrentPortion(props.currentPortion - 1)
        }}> PREV </button> : null}

        {pages.filter(p => p > leftPortion && p <= rightPortion).map((p, i) => {
            return <span key={i} className={props.currentPage === p ? style.selectedPage : style.otherPages}
                         onClick={() => {
                             props.onPageChanged(p)
                         }}> {p} </span>
        })}

        {props.currentPortion < portionCount ? <button onClick={() => {
            props.setCurrentPortion(props.currentPortion + 1)
        }}> NEXT </button> : null}
    </div>
};

// new Array(pagesCount).fill().map((p, i) => ++i).map((p, i)

export default Paginator;
