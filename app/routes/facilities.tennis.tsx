import Header from "../components/Header";
import Footer from "../components/Footer";
import Tennis_00 from "~/IMG/0/Tennis_00.webp";
import RogerFederer from "~/IMG/0/RogerFederer.webp";
import NovakDjokovic from "~/IMG/0/NovakDjokovic.webp";
import RafaelNadal from "~/IMG/0/RafaelNadal.webp";

export default function Tennis() {
    const tn = [
        { img: RogerFederer, name: "Roger Federer" },
        { img: NovakDjokovic, name: "Novak Djokovic" },
        { img: RafaelNadal, name: "Rafael Nadal" },
    ];
    return (
        <>
            <Header />
            <main>
                <img src={Tennis_00} alt="Tennis_00"/>
                <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                    <p>
                        Tennis is a racket sport that is played either individually against a single opponent (singles)
                        or between two teams of two players each (doubles). Each player uses a tennis racket that is
                        strung with cord to strike a hollow rubber ball covered with felt over or around a net and into
                        the opponent's court. The object of the game is to manoeuvre the ball in such a way that the
                        opponent is not able to play a valid return. The player who is unable to return the ball validly
                        will not gain a point, while the opposite player will.<br/><br/>

                        Tennis is an Olympic sport and is played at all levels of society and at all ages. The sport can
                        be played by anyone who can hold a racket, including wheelchair users. The original forms of
                        tennis developed in France during the late Middle Ages. The modern form of tennis originated
                        in Birmingham, England, in the late 19th century as lawn tennis. It had close connections
                        both to various field (lawn) games such as croquet and bowls as well as to the older racket
                        sport today called real tennis.<br/><br/>

                        The rules of modern tennis have changed little since the 1890s. Two exceptions are that until
                        1961 the server had to keep one foot on the ground at all times, and the adoption of the
                        tiebreak in the 1970s. A recent addition to professional tennis has been the adoption of
                        electronic review technology coupled with a point-challenge system, which allows a player to
                        contest the line call of a point, a system known as Hawk-Eye.<br/><br/>

                        Tennis is played by millions of recreational players and is a popular worldwide spectator
                        sport. The four Grand Slam tournaments (also referred to as the majors) are especially
                        popular: the Australian Open, played on hardcourts; the French Open, played on red clay courts;
                        Wimbledon, played on grass courts; and the US Open, also played on hardcourts.<br/><br/>
                    </p>
                    <h1><b className={'text-2xl'}>*Rules:</b></h1>
                    <p>
                        The game starts with a coin toss to determine which player must serve first and which side they
                        want to serve from.<br/><br/>
                        The server must then serve each point from alternative sides on the base line. At no point must
                        the server’s feet move in front of the baseline on the court prior to hitting their
                        serve.<br/><br/>
                        If the server fails to get their first serve in they may take advantage of a second serve. If
                        they again fail to get their second serve in then a double fault will be called and the point
                        lost.<br/><br/>
                        If the server clips the net but the ball goes in the service area still then let is called and
                        they get to take that serve again without penalty. If the ball hits the net and fails to go in
                        the service area then out is called and they lose that serve.<br/><br/>
                        The receiver may stand where they wish upon receipt of the serve. If the ball is struck without
                        the serve bouncing then the server will receive the point.<br/><br/>
                        Once a serve has been made the amount of shots between the players can be unlimited. The point
                        is won by hitting the ball so the opponent fails to return it in the scoring areas.<br/><br/>
                        Points are awarded in scores of 15, 30 and 40. 15 represent 1 point, 30 = 2 and 40 = 3. You
                        need 4 points to win a game. If a game lands on 40-40 it’s known as deuce. From deuce a player
                        needs to win 2 consecutive points to win the game. After winning one point from deuce they
                        player is on advantage. If the player wins the next point they win the game, if they lose it
                        goes back to deuce.<br/><br/>
                        To win the set a player must win 6 games by 2 or more. The opening sets will go to a tie break
                        if its ends up 6-6 where players play first to 7 points. The final set will not have a tie break
                        and requires players to win by two games with no limits.<br/><br/>
                        If a player touches the net, distracts his opponent or impedes in anyway then they automatically
                        lose the point.<br/><br/>
                        The ball can hit any part of the line for the point to be called in, outside the line and the
                        ball is out.<br/><br/>
                        The balls in a tennis match are changed for new balls every 6 games.<br/><br/>
                        A player loses a point if they fail to return the ball in either the correct areas on the court,
                        hits the net and doesn’t go into opponent’s area or fails to return the ball before it bounces
                        twice in their half.<br/><br/>

                        <b>Object Of The Game</b><br/><br/>
                        The game of tennis played on a rectangular court with a net running across the centre. The aim
                        is to hit the ball over the net landing the ball within the margins of the court and in a way
                        that results in your opponent being unable to return the ball. You win a point every time your
                        opponent is unable to return the ball within the court.<br/><br/>

                        <b>Players & Equipment</b><br/><br/>
                        A tennis match can be played by either one player on each side – a singles match – or two
                        players on each side – a doubles match. The rectangular shaped court has a base line (at the
                        back), service areas (two spaces just over the net in which a successful serve must land in) and
                        two tram lines down either side. A singles match will mean you use the inner side tram line and
                        a doubles match will mean you use the outer tram line.<br/><br/>

                        A court can be played on four main surfaces including grass, clay, hard surface and carpet. Each
                        tournament will choose one surface type and stick without throughout. All that is required in
                        terms of equipment is a stringed racket each and a tennis ball.
                        Scoring<br/><br/>

                        You need to score four points to win a game of tennis. The points are known as 15 (1 point), 30
                        (two points), 40 (three points) and the fourth would result in the winning point and the end of
                        that game. If the scores went to 40-40 this would be known as deuce. When a game reaches deuce
                        the player must then win by two clear points.<br/><br/>

                        <b>Winning The Game</b><br/><br/>
                        To win the game you must win a certain amount of sets (best of three for women’s matches and
                        best of 5 sets for men’s matches). Winning a set is simply the first player to reach 6 games but
                        have to be clear by at least 2 games. If your opponent wins 5 games you must win the set 7-5. If
                        the set goes to 6-6 then a tie break is played and it’s simply the first player to 7
                        points.<br/><br/>
                    </p>
                    <h1><b className={'text-2xl'}>*Famous Players:</b></h1>
                    <div
                        className="m-fclt__content text-white grid grid-cols-3 gap-4 p-4 overflow-auto">
                        {tn.map((fclt) => (
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