import Header from "../components/Header";
import Footer from "../components/Footer";
import Golf_00 from "../IMG/0/Golf_00.webp";

export default function Bowling() {
    return (
        <>
            <Header />
            <main>
                <img src={Golf_00} alt="Golf_00"/>
                <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                    <p>
                        Golf is a club-and-ball sport in which players use various clubs to hit a ball into a series of
                        holes on a course in as few strokes as possible.<br/><br/>

                        Golf, unlike most ball games, cannot and does not use a standardized playing area, and coping
                        with the varied terrains encountered on different courses is a key part of the game. Courses
                        typically have either 9 or 18 holes, regions of terrain that each contain a cup, the hole that
                        receives the ball. Each hole on a course contains a teeing ground to start from, and a putting
                        green containing the cup. There are several standard forms of terrain between the tee and the
                        green, such as the fairway, rough (tall grass), and various hazards such as water, rocks, or
                        sand-filled bunkers. Each hole on a course is unique in its specific layout.<br/><br/>

                        Golf is played for the lowest number of strokes by an individual, known as stroke play, or the
                        lowest score on the most individual holes in a complete round by an individual or team, known as
                        match play. Stroke play is the most commonly seen format at all levels, especially at the elite
                        level.<br/><br/>

                        The modern game of golf originated in 15th century Scotland. The 18-hole round was created at
                        the Old Course at St Andrews in 1764. Golf's first major, and the world's oldest golf
                        tournament, is The Open Championship, also known as the British Open, which was first played in
                        1860 at the Prestwick Golf Club in Ayrshire, Scotland. This is one of the four major
                        championships in men's professional golf, the other three being played in the United States: The
                        Masters, the U.S. Open, and the PGA Championship.<br/><br/>
                    </p>
                    <h1><b className={'text-2xl'}>*Rules:</b></h1>
                    <p>
                        The rules of golf are internationally standardised and are jointly governed by The R&A, spun off
                        in 2004 from The Royal and Ancient Golf Club of St Andrews (founded 1754), and the United States
                        Golf Association (USGA). With the aim of simplifying the rules, in 2017 the USGA and R&A
                        undertook a complete rewrite. The new rule book came into effect in January 2019.<br/><br/>

                        The underlying principle of the rules is fairness. As stated on the back cover of the official
                        rule book:<br/><br/>

                        <i>Play the ball as it lies, play the course as you find it, and if you cannot do either, do
                            what is fair.</i><br/><br/>

                        There are strict regulations regarding the amateur status of golfers. Essentially, anybody
                        who has ever received payment or compensation for giving instruction, or played golf for money,
                        is not considered an amateur and may not participate in competitions limited solely to amateurs.
                        However, amateur golfers may receive expenses that comply with strict guidelines and they may
                        accept non-cash prizes within the limits established by the Rules of Amateur Status.<br/><br/>

                        In addition to the officially printed rules, golfers also abide by a set of guidelines called
                        golf etiquette. Etiquette guidelines cover matters such as safety, fairness, pace of play, and a
                        player's obligation to contribute to the care of the course. Though there are no penalties for
                        breach of etiquette rules, players generally follow the rules of golf etiquette in an effort to
                        improve everyone's playing experience.<br/><br/>

                        <b>Penalties</b><br/><br/>
                        Penalty strokes are incurred in certain situations and are counted towards a player's score as
                        if there were extra swing(s) at the ball. Either one or two strokes are added for most rule
                        infractions or for taking relief from various situations, with the "general penalty" defined as
                        two-strokes, and disqualification for severe or repeated rule breaches. Examples
                        include:<br/><br/>

                        *A lost ball or a ball hit out of bounds (OB) results in a penalty of one stroke and
                        distance.<br/><br/>
                        *With the exception of certain circumstances, a one-stroke penalty is assessed if a player
                        causes their ball to move.<br/><br/>
                        *A one-stroke penalty is assessed if a player elects to take relief when their ball comes to
                        rest
                        within a red or yellow penalty area (Rule 17), or from an unplayable lie.<br/><br/>
                        *A two-stroke penalty is incurred for making a stroke at the wrong ball.<br/><br/>
                        *A two-stroke penalty is incurred for hitting a fellow player's ball if both balls lay on the
                        green prior to the stroke.<br/><br/>
                        *Disqualification can result from cheating, signing for a lower score, or failing to adhere to
                        one or more rules that lead to improper play.<br/><br/>
                    </p>
                </div>
            </main>
            <Footer/>
        </>
    );
}