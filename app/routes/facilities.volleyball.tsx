import Header from "../components/Header";
import Footer from "../components/Footer";
import VB_00 from "../IMG/0/Volleyball_00.webp";

export default function Volleyball() {
    return (
        <>
            <Header />
            <main>
                <img src={VB_00} alt="VB_00"/>
                <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                    <p>
                        Volleyball is a team sport in which two teams of six players are separated by a net. Each team
                        tries to score points by grounding a ball on the other team's court under organized rules. It
                        has been a part of the official program of the Summer Olympic Games since Tokyo 1964. Beach
                        volleyball was introduced to the programme at the Atlanta 1996 Summer Olympics. The adapted
                        version of volleyball at the Summer Paralympic Games is sitting volleyball.<br/><br/>

                        The complete set of rules is extensive, but play essentially proceeds as follows: a player on
                        one of the teams begins a 'rally' by serving the ball (tossing or releasing it and then hitting
                        it with a hand or arm), from behind the back boundary line of the court, over the net, and into
                        the receiving team's court. The receiving team must not let the ball be grounded within their
                        court. The team may touch the ball up to three times to return the ball to the other side of the
                        court, but individual players may not touch the ball twice consecutively. Typically, the
                        first two touches are used to set up for an attack. An attack is an attempt to direct the ball
                        back over the net in such a way that the team receiving the ball is unable to pass the ball and
                        continue the rally, thus, losing the point. The team that wins the rally is awarded a point and
                        serves the ball to start the next rally. A few of the most common faults include:<br/><br/>

                        *causing the ball to touch the ground or floor outside the opponents' court or without first
                        passing over the net
                        *catching and throwing the ball
                        *double hit: two consecutive contacts with the ball made by the same player
                        *four consecutive contacts with the ball made by the same team
                        *net foul: touching the net during play
                        *foot fault: the foot crosses over the boundary line when serving or under the net when a front
                        row player is trying to keep the ball in play.

                        The ball is usually played with the hands or arms, but players can legally strike or push (short
                        contact) the ball with any part of the body.<br/><br/>

                        A number of consistent techniques have evolved in volleyball, including spiking and blocking
                        (because these plays are made above the top of the net, the vertical jump is an athletic skill
                        emphasized in the sport) as well as passing, setting, specialized player positions, and
                        offensive and defensive structures.<br/><br/>
                    </p>
                    <h1><b className={'text-2xl'}>*Rules:</b></h1>
                    <p>

                        Only 6 players on the floor at any given time: 3 in the front row and 3 in the back
                        row.<br/><br/>
                        Points are made on every serve for the winning team of the rally (rally-point
                        scoring).<br/><br/>
                        Players may not hit the ball twice in succession (a block is not considered a hit).<br/><br/>
                        Ball may be played off the net during a volley and on a serve.<br/><br/>
                        A ball hitting a boundary line is in.<br/><br/>
                        A ball is out if it hits an antennae, the floor completely outside the court, any of the net or
                        cables outside the antennae, the referee stand or pole, or the ceiling above a non-playable
                        area.<br/><br/>
                        It is legal to contact the ball with any part of a player’s body.<br/><br/>
                        It is illegal to catch, hold or throw the ball.<br/><br/>
                        A player cannot block or attack a serve from on or inside the 10-foot line.<br/><br/>
                        After the serve, front-line players may switch positions at the net.<br/><br/>
                        Matches are made up of sets; the number depends on level of play.<br/><br/>

                        <b>Rule Violations</b><br/><br/>
                        Stepping on or across the service line when serving while making contact with the
                        ball.<br/><br/>
                        Failure to serve the ball over the net successfully.<br/><br/>
                        Ball-handling errors and contacting the ball illegally (double touching, lifting, carrying,
                        throwing, etc.)<br/><br/>
                        Touching the net with any part of the body while the ball is in play.<br/><br/>
                        Blocking a ball coming from the opponent’s court and contacting the ball when reaching over the
                        net
                        if your opponent has not used 3 contacts AND has a player there to make a play on the
                        ball.<br/><br/>
                        Attacking a ball coming from the opponent’s court and contacting the ball when reaching over the
                        net
                        when the ball has not yet broken the vertical plane of the net.<br/><br/>
                        Crossing the court centerline with any part of your body, with the exception of a hand or foot.
                        It
                        is only considered a violation if the entire hand or entire foot crosses the court
                        centerline.<br/><br/>
                        Serving out of rotation or out of order.<br/><br/>
                        Back row player blocking (deflecting a ball coming from the opponent) when, at the moment of
                        contact, the back row player is near the net and has part of their body above the top of the
                        net. This is an illegal block.<br/><br/>
                        Back row player attacking a ball inside the front zone (the area inside the 3M/10-foot line)
                        when,
                        at the moment of contact, the ball is completely above the net. This is an illegal
                        attack.<br/><br/>
                    </p>
                </div>
            </main>
            <Footer/>
        </>
    );
}