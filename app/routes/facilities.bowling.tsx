import Header from "../components/Header";
import Footer from "../components/Footer";
import Bowling_00 from "../IMG/0/Bowling_00.webp";

export default function Bowling() {
    return (
        <>
            <Header />
            <main>
                <img src={Bowling_00} alt="Bowling_00"/>
                <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                    <p>
                        Bowling is a target sport and recreational activity in which a player rolls a ball toward pins
                        (in pin bowling) or another target (in target bowling). The term bowling usually refers to pin
                        bowling (most commonly ten-pin bowling), though in the United Kingdom and Commonwealth
                        countries, bowling could also refer to target bowling, such as lawn bowls.<br/><br/>

                        In pin bowling, the goal is to knock over pins on a long playing surface known as a lane. Lanes
                        have a wood or synthetic surface onto which protective lubricating oil is applied in different
                        specified oil patterns that affect ball motion. A strike is achieved when all the pins are
                        knocked down on the first roll, and a spare is achieved if all the pins are knocked over on a
                        second roll. Common types of pin bowling include ten-pin, candlepin, duckpin, nine-pin, and
                        five-pin. The historical game skittles is the forerunner of modern pin bowling.<br/><br/>

                        In target bowling, the aim is usually to get the ball as close to a mark as possible. The
                        surface in target bowling may be grass, gravel, or synthetic. Lawn bowls, bocce, carpet
                        bowls, pétanque, and boules may have both indoor and outdoor varieties. Curling is also related
                        to bowls.<br/><br/>

                        Bowling is played by 120 million people in more than 90 countries (including 70 million people
                        in the United States alone).<br/><br/>
                    </p>
                    <h1><b className={'text-2xl'}>*Rules:</b></h1>
                    <p>
                        <b>Scoring</b><br/><br/>
                        A standard game of ten-pin bowling consists of 10 frames, with a maximum of two rolls in each of
                        the first nine frames and three in the tenth. A strike occurs when the bowler knocks down all 10
                        pins on the first roll; if this occurs in any of the first nine frames, the frame ends
                        immediately without a second roll being taken. A spare occurs if the bowler leaves any pins
                        standing after the first roll, then knocks them all down on the second. In any given frame, the
                        bowler scores one point for every pin knocked down; a spare or strike awards one extra point for
                        each pin knocked down on the next one or two rolls, respectively. In the tenth frame, the
                        bowler gets one extra roll for making a spare, or two for a strike. The highest possible score
                        for a single game is 300, achieved by rolling 12 consecutive strikes (a "perfect
                        game").<br/><br/>
                    </p>
                </div>
            </main>
            <Footer/>
        </>
    );
}