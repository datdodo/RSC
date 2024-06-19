import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Squash() {
    return (
        <>
            <Header />
            <main className={'pt-[5rem]'}>
                <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                    <p>
                        Squash, sometimes called squash rackets, is a racket-and-ball sport played by two (singles) or
                        four players (doubles) in a four-walled court with a small, hollow, rubber ball. The players
                        alternate in striking the ball with their rackets onto the playable surfaces of the four walls
                        of the court. The objective of the game is to hit the ball in such a way that the opponent is
                        not able to play a valid return. There are about 20 million people who play squash regularly
                        world-wide in over 185 countries. The governing body of squash, the World Squash Federation
                        (WSF), is recognized by the International Olympic Committee (IOC), and the sport will be
                        included in the Olympic Games, starting with the 2028 Summer Olympics in Los Angeles. The
                        Professional Squash Association (PSA) organizes the pro tour.<br/><br/>
                    </p>
                    <h1><b className={'text-2xl'}>*Rules:</b></h1>
                    <p>
                        <b>Object Of The Game:</b><br/><br/>
                        The goal is to hit the ball off the back wall until your opponent fails to return it.
                        Each successful shot earns you a point.<br/><br/>

                        <b>Players & Equipment:</b><br/><br/>
                        Squash is played between two people in a box-like court.<br/><br/>
                        You’ll need a squash racket (similar to a tennis racket but with a smaller head) and a rubber
                        squash ball.<br/><br/>
                        The ball comes in different speeds, ranging from super slow (competition standard) to fast (more
                        beginner-friendly).<br/><br/>

                        <b>Scoring:</b><br/><br/>
                        -Points can be scored in four ways:<br/><br/>
                        *The ball bounces twice before your opponent hits it.<br/><br/>
                        *The ball hits the backboard (or net).<br/><br/>
                        *The ball goes outside the court outline.<br/><br/>
                        *A player intentionally interferes to prevent their opponent from reaching the ball.<br/><br/>
                        -There are two scoring methods:<br/><br/>
                        *PAR (Point-a-Rally): Play to 11 points, and you can score from either player’s serve.<br/><br/>
                        *Traditional: Play to 9 points, but you can only score off your own serve.<br/><br/>

                        <b>Winning The Game:</b><br/><br/>
                        To win the match, reach the required number of sets (usually best of 5 games).<br/><br/>
                    </p>
                </div>
            </main>
            <Footer/>
        </>
    );
}