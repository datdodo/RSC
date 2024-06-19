import Header from "../components/Header";
import Footer from "../components/Footer";
import Football_00 from "../IMG/0/Football_00.webp"
import Messi from "~/IMG/0/Messi.webp";
import Ronaldo from "~/IMG/0/Ronaldo.webp";
import Lewandowski from "~/IMG/0/Lewandowski.webp";

export default function Football() {
    const fb = [
        { img: Messi, name: "Lionel Messi" },
        { img: Ronaldo, name: "Cristiano Ronaldo" },
        { img: Lewandowski, name: "Robert Lewandowski" },
    ];
    return (
        <>
            <Header />
            <main>
                <img src={Football_00} alt="Football_00"/>
                <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                    <p>
                        Football (Soccer) is a team sport played
                        between two teams of 11 players each, who primarily use their feet to propel a ball around a
                        rectangular field called a pitch. The objective of the game is to score more goals than the
                        opposing team by moving the ball beyond the goal line into a rectangular-framed goal defended by
                        the opposing team. Traditionally, the game has been played over two 45-minute halves, for a
                        total match time of 90 minutes. With an estimated 250 million players active in over 200
                        countries and territories, it is the world's most popular sport.<br/><br/>

                        The game of association football is played in accordance with the Laws of the Game, a set of
                        rules that has been in effect since 1863 and maintained by the IFAB since 1886. The game is
                        played with a football that is 68–70 cm (27–28 in) in circumference. The two teams compete to
                        get the ball into the other team's goal (between the posts, under the bar, and across the goal
                        line), thereby scoring a goal. When the ball is in play, the players mainly use their feet, but
                        may use any other part of their body, except for their hands or arms, to control, strike, or
                        pass the ball. Only the goalkeepers may use their hands and arms, and only then within the
                        penalty area. The team that has scored more goals at the end of the game is the winner. There
                        are situations where a goal can be disallowed, such as an offside call or a foul in the build-up
                        to the goal. Depending on the format of the competition, an equal number of goals scored may
                        result in a draw being declared, or the game goes into extra time or a penalty
                        shoot-out.<br/><br/>

                        Internationally, association football is governed by FIFA. Under FIFA, there are six continental
                        confederations: AFC, CAF, CONCACAF, CONMEBOL, OFC, and UEFA. Of these confederations, CONMEBOL
                        is the oldest one, being founded in 1916. National associations (e.g. The FA or JFA) are
                        responsible for managing the game in their own countries both professionally and at an amateur
                        level, and coordinating competitions in accordance with the Laws of the Game. The most senior
                        and prestigious international competitions are the FIFA World Cup and the FIFA Women's World
                        Cup. The men's World Cup is the most-viewed sporting event in the world, surpassing the Olympic
                        Games. The two most prestigious competitions in European club football are the UEFA Champions
                        League and the UEFA Women's Champions League, which attract an extensive television audience
                        throughout the world. Since 2009, the final of the men's tournament has been the most-watched
                        annual sporting event in the world.<br/><br/>
                    </p>
                    <h1><b className={'text-2xl'}>*Rules:</b></h1>
                    <p>
                        <b>Players, Equipment & Officials</b><br/><br/>
                        Each team consists of a maximum of eleven players (excluding substitutes), one of whom must be
                        the goalkeeper. Competition rules may state a minimum number of players required to constitute a
                        team, which is usually seven. Goalkeepers are the only players allowed to play the ball with
                        their hands or arms, provided they do so within the penalty area in front of their own goal.
                        Though there are a variety of positions in which the outfield (non-goalkeeper) players are
                        strategically placed by a coach, these positions are not defined or required by the
                        Laws.<br/><br/>

                        The basic equipment or kit players are required to wear includes a shirt, shorts, socks,
                        footwear and adequate shin guards. An athletic supporter and protective cup is highly
                        recommended for male players by medical experts and professionals. Headgear is not a
                        required piece of basic equipment, but players today may choose to wear it to protect themselves
                        from head injury. Players are forbidden to wear or use anything that is dangerous to
                        themselves or another player, such as jewellery or watches. The goalkeeper must wear clothing
                        that is easily distinguishable from that worn by the other players and the match officials.<br/><br/>

                        A number of players may be replaced by substitutes during the course of the game. The maximum
                        number of substitutions permitted in most competitive international and domestic league games is
                        five in 90 minutes, with each team being allowed one more if the game should go into
                        extra-time; the permitted number may vary in other competitions or in friendly matches. Common
                        reasons for a substitution include injury, tiredness, ineffectiveness, a tactical switch, or
                        timewasting at the end of a finely poised game. In standard adult matches, a player who has been
                        substituted may not take further part in a match. IFAB recommends "that a match should not
                        continue if there are fewer than seven players in either team". Any decision regarding points
                        awarded for abandoned games is left to the individual football associations.<br/><br/>

                        A game is officiated by a referee, who has "full authority to enforce the Laws of the Game in
                        connection with the match to which he has been appointed" (Law 5), and whose decisions are
                        final. The referee is assisted by two assistant referees. In many high-level games there is also
                        a fourth official who assists the referee and may replace another official should the need
                        arise.<br/><br/>

                        Goal line technology is used to measure if the whole ball has crossed the goal-line thereby
                        determining whether a goal has been scored or not; this was brought in to prevent controversy.
                        Video assistant referees (VAR) have also been increasingly introduced in high-level matches to
                        assist officials through video replays to correct clear and obvious mistakes. There are four
                        types of calls that can be reviewed: mistaken identity in awarding a red or yellow card, goals
                        and whether there was a violation during the buildup, direct red card decisions, and penalty
                        decisions.<br/><br/>

                        <b>Ball</b><br/><br/>
                        The ball is spherical with a circumference of between 68 and 70 cm (27 and 28 in), a weight in
                        the range of 410 to 450 g (14 to 16 oz), and a pressure between 0.6 and 1.1 standard atmospheres
                        (8.5 and 15.6 pounds per square inch) at sea level. In the past the ball was made up of leather
                        panels sewn together, with a latex bladder for pressurisation, but modern balls at all levels of
                        the game are now synthetic.<br/><br/>

                        <b>Pitch</b><br/><br/>
                        As the Laws were formulated in England, and were initially administered solely by the four
                        British football associations within IFAB, the standard dimensions of a football pitch were
                        originally expressed in imperial units. The Laws now express dimensions with approximate metric
                        equivalents (followed by traditional units in brackets), though use of imperial units remains
                        popular in English-speaking countries with a relatively recent history of metrication (or only
                        partial metrication), such as Britain.<br/><br/>

                        The length of the pitch, or field, for international adult matches is in the range of 100–110 m
                        (110–120 yd) and the width is in the range of 64–75 m (70–80 yd). Fields for non-international
                        matches may be 90–120 m (100–130 yd) in length and 45–90 m (50–100 yd) in width, provided the
                        pitch does not become square. In 2008, the IFAB initially approved a fixed size of 105 m (115
                        yd) long and 68 m (74 yd) wide as a standard pitch dimension for international matches; however,
                        this decision was later put on hold and was never actually implemented.<br/><br/>

                        The longer boundary lines are touchlines, while the shorter boundaries (on which the goals are
                        placed) are goal lines. A rectangular goal is positioned on each goal line, midway between the
                        two touchlines. The inner edges of the vertical goal posts must be 7.32 m (24 ft) apart,
                        and the lower edge of the horizontal crossbar supported by the goal posts must be 2.44 m (8 ft)
                        above the ground. Nets are usually placed behind the goal, but are not required by the
                        Laws.<br/><br/>

                        In front of the goal is the penalty area. This area is marked by the goal line, two lines
                        starting on the goal line 16.5 m (18 yd) from the goalposts and extending 16.5 m (18 yd) into
                        the pitch perpendicular to the goal line, and a line joining them. This area has a number of
                        functions, the most prominent being to mark where the goalkeeper may handle the ball and where a
                        penalty foul by a member of the defending team becomes punishable by a penalty kick. Other
                        markings define the position of the ball or players at kick-offs, goal kicks, penalty kicks and
                        corner kicks.<br/><br/>

                        <b>Duration & Tie-breaking Methods</b><br/><br/>
                        <b>+90-minute Ordinary Time</b><br/><br/>
                        A standard adult football match consists of two halves of 45 minutes each. Each half runs
                        continuously, meaning that the clock is not stopped when the ball is out of play. There is
                        usually a 15-minute half-time break between halves. The end of the match is known as
                        full-time. The referee is the official timekeeper for the match, and may make an allowance
                        for time lost through substitutions, injured players requiring attention, or other stoppages.
                        This added time is called "additional time" in FIFA documents, but is most commonly
                        referred to as stoppage time or injury time, while lost time can also be used as a synonym. The
                        duration of stoppage time is at the sole discretion of the referee. Stoppage time does not fully
                        compensate for the time in which the ball is out of play, and a 90-minute game typically
                        involves about an hour of "effective playing time". The referee alone signals the end
                        of the match. In matches where a fourth official is appointed, towards the end of the half, the
                        referee signals how many minutes of stoppage time they intend to add. The fourth official then
                        informs the players and spectators by holding up a board showing this number. The signalled
                        stoppage time may be further extended by the referee. Added time was introduced because of
                        an incident which happened in 1891 during a match between Stoke and Aston Villa. Trailing 1–0
                        with two minutes remaining, Stoke were awarded a penalty kick. Villa's goalkeeper deliberately
                        kicked the ball out of play; by the time it was recovered, the clock had run out and the game
                        was over, leaving Stoke unable to attempt the penalty. The same law also states that the
                        duration of either half is extended until a penalty kick to be taken or retaken is completed;
                        thus, no game can end with an uncompleted penalty.<br/><br/>

                        <b>+Tie-breaking</b><br/><br/>
                        In league competitions, games may end in a draw. In knockout competitions where a winner is
                        required, various methods may be employed to break such a deadlock; some competitions may invoke
                        replays. A game tied at the end of regulation time may go into extra time, which consists
                        of two further 15-minute periods. If the score is still tied after extra time, some competitions
                        allow the use of penalty shoot-outs (known officially in the Laws of the Game as "kicks from the
                        penalty mark") to determine which team will progress to the next stage of the tournament or be
                        the champion. Goals scored during extra time periods count towards the final score of the game,
                        but kicks from the penalty mark are only used to decide the team that progresses to the next
                        part of the tournament, with goals scored in a penalty shoot-out not making up part of the final
                        score.<br/><br/>

                        In competitions using two-legged matches, each team competes at home once, with an aggregate
                        score from the two matches deciding which team progresses. Where aggregates are equal, the away
                        goals rule may be used to determine the winners, in which case the winner is the team that
                        scored the most goals in the leg they played away from home. If the result is still equal, extra
                        time and potentially a penalty shoot-out are required.<br/><br/>

                        <b>Ball In & Out Of Play</b><br/><br/>
                        Under the Laws, the two basic states of play during a game are ball in play and ball out of
                        play. From the beginning of each playing period with a kick-off until the end of the playing
                        period, the ball is in play at all times, except when either the ball leaves the field of play,
                        or play is stopped by the referee. When the ball becomes out of play, play is restarted by one
                        of eight restart methods depending on how it went out of play:<br/><br/>

                        *Kick-off: following a goal by the opposing team, or to begin each period of play.<br/><br/>
                        *Throw-in: when the ball has crossed the touchline; awarded to the opposing team to that which
                        last touched the ball.<br/><br/>
                        *Goal kick: when the ball has wholly crossed the goal line without a goal having been scored and
                        having last been touched by a player of the attacking team; awarded to defending team.<br/><br/>
                        *Corner kick: when the ball has wholly crossed the goal line without a goal having been scored
                        and having last been touched by a player of the defending team; awarded to attacking
                        team.<br/><br/>
                        *Indirect free kick: awarded to the opposing team following "non-penal" fouls, certain technical
                        infringements, or when play is stopped to caution or dismiss an opponent without a specific foul
                        having occurred. A goal may not be scored directly (without the ball first touching another
                        player) from an indirect free kick.<br/><br/>
                        *Direct free kick: awarded to fouled team following certain listed "penal" fouls. A goal may
                        be scored directly from a direct free kick.<br/><br/>
                        *Penalty kick: awarded to the fouled team following a foul usually punishable by a direct free
                        kick but that has occurred within their opponent's penalty area.<br/><br/>
                        *Dropped-ball: occurs when the referee has stopped play for any other reason, such as a serious
                        injury to a player, interference by an external party, or a ball becoming defective.<br/><br/>

                        <b>Misconduct</b><br/><br/>
                        <b>+On-field</b><br/><br/>
                        Players are cautioned with a yellow card, and dismissed from the game with a red card. These
                        colours were first introduced at the 1970 FIFA World Cup and used consistently since.<br/><br/>

                        A foul occurs when a player commits an offence listed in the Laws of the Game while the ball is
                        in play. The offences that constitute a foul are listed in Law 12. Handling the ball
                        deliberately, tripping an opponent, or pushing an opponent, are examples of "penal fouls",
                        punishable by a direct free kick or penalty kick depending on where the offence occurred. Other
                        fouls are punishable by an indirect free kick.<br/><br/>

                        The referee may punish a player's or substitute's misconduct by a caution (yellow card) or
                        dismissal (red card). A second yellow card in the same game leads to a red card, which results
                        in a dismissal. A player given a yellow card is said to have been "booked", the referee writing
                        the player's name in their official notebook. If a player has been dismissed, no substitute can
                        be brought on in their place and the player may not participate in further play. Misconduct may
                        occur at any time, and while the offences that constitute misconduct are listed, the definitions
                        are broad. In particular, the offence of "unsporting behaviour" may be used to deal with most
                        events that violate the spirit of the game, even if they are not listed as specific offences. A
                        referee can show a yellow or red card to a player, substitute, substituted player, and to
                        non-players such as managers and support staff.<br/><br/>

                        Rather than stopping play, the referee may allow play to continue if doing so will benefit the
                        team against which an offence has been committed. This is known as "playing an advantage". The
                        referee may "call back" play and penalise the original offence if the anticipated advantage
                        does not ensue within "a few seconds". Even if an offence is not penalised due to advantage
                        being played, the offender may still be sanctioned for misconduct at the next stoppage of
                        play.<br/><br/>

                        The referee's decision in all on-pitch matters is considered final. The score of a match
                        cannot be altered after the game, even if later evidence shows that decisions (including
                        awards/non-awards of goals) were incorrect.<br/><br/>

                        <b>+Off-field</b><br/><br/>
                        Along with the general administration of the sport, football associations and competition
                        organisers also enforce good conduct in wider aspects of the game, dealing with issues such as
                        comments to the press, clubs' financial management, doping, age fraud and match fixing. Most
                        competitions enforce mandatory suspensions for players who are sent off in a game. Some
                        on-field incidents, if considered very serious (such as allegations of racial abuse), may result
                        in competitions deciding to impose heavier sanctions than those normally associated with a red
                        card. Some associations allow for appeals against player suspensions incurred on-field if
                        clubs feel a referee was incorrect or unduly harsh.<br/><br/>

                        Sanctions for such infractions may be levied on individuals or on clubs as a whole. Penalties
                        may include fines, point deductions (in league competitions) or even expulsion from
                        competitions. For example, the English Football League deduct 12 points from any team that
                        enters financial administration. Among other administrative sanctions are penalties against
                        game forfeiture. Teams that had forfeited a game or had been forfeited against would be awarded
                        a technical loss or win.<br/><br/>
                    </p>
                    <h1><b className={'text-2xl'}>*Famous Players:</b></h1>
                    <div
                        className="m-fclt__content text-white grid grid-cols-3 gap-4 p-4 overflow-auto">
                        {fb.map((fclt) => (
                            <div
                                key={fclt.img}
                                className="m-fclt__item border-2 border-solid border-cyan-400 anmt"
                            >
                                <div className="m-fclt__img h-4/5 flex justify-center items-center overflow-hidden">
                                    <img
                                        src={fclt.img}
                                        alt={fclt.img}
                                        className="min-w-full min-h-full"
                                    />
                                </div>
                                <div
                                    className="m-fclt__desc h-1/5 text-2xl bg-zinc-900 border-t-2 border-solid border-cyan-400 flex justify-center items-center">
                                    {fclt.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}