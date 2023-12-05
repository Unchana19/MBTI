import notFoundPic from "../assets/notfound.svg"

export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h3 className="title">404 NOTFOUND</h3>
            <img src={notFoundPic} alt="not found" />
        </div>
    );
}