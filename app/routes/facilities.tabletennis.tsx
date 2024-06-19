import Header from "../components/Header";
import Footer from "../components/Footer";
import TT_00 from "../IMG/0/TT_00.webp";

export default function TableTennis() {
    return (
        <>
            <Header />
            <main>
                <img src={TT_00} alt="TT_00"/>
                <div className="max-w-[70%] flex-[0_0_70%] m-auto">
                    <p>
                        Table tennis (also known as ping-pong or whiff-whaff) is a racket sport derived from tennis but
                        distinguished by its playing surface being atop a stationary table, rather than the court on
                        which players stand. Either individually or in teams of two, players take alternating turns
                        returning a light, hollow ball over the table's net onto the opposing half of the court using
                        small rackets until they fail to do so, which results in a point for the opponent. Play is fast,
                        requiring quick reaction and constant attention, and is characterized by an emphasis on spin
                        relative to other ball sports, which can heavily affect the ball's trajectory.<br/><br/>

                        Owed to its small minimum playing area, its ability to be played indoors in all climates, and
                        relative accessibility of equipment, table tennis is enjoyed worldwide not just as a competitive
                        sport, but as a common recreational pastime among players of all levels and ages.<br/><br/>

                        Table tennis has been an Olympic sport since 1988, with event categories in both men's and
                        women's singles, and men's and women's teams since replacing doubles in 2008.<br/><br/>

                        Table tennis is governed by the International Table Tennis Federation (ITTF), founded in 1926,
                        and specifies the official rules in the ITTF handbook. ITTF currently includes 226 member
                        associations worldwide.<br/><br/>
                    </p>
                    <h1><b className={'text-2xl'}>*Rules:</b></h1>
                    <p>
                        The official rules and regulations are specified in the ITTF handbook, which was first published
                        in 1927. The current (fiftieth) version was published in 2022.<br/><br/>

                        <b>Rule changes</b><br/><br/>
                        After the 2000 Olympics in Sydney, the ITTF instituted several rule changes that were aimed at
                        making table tennis more viable as a televised spectator sport. First, the older 38 mm
                        (1.50 in) balls were officially replaced by 40 mm (1.57 in) balls in October 2000. This
                        increased the ball's air resistance and effectively slowed down the game. By that time, players
                        had begun increasing the thickness of the fast sponge layer on their paddles, which made the
                        game excessively fast and difficult to watch on television. A few months later, the ITTF changed
                        from a 21-point to an 11-point scoring system (and the serve rotation was reduced from five
                        points to two), effective in September 2001. This was intended to make games more fast-paced
                        and exciting. The ITTF also changed the rules on service to prevent a player from hiding the
                        ball during service, in order to increase the average length of rallies and to reduce the
                        server's advantage, effective in 2002. For the opponent to have time to realize a serve is
                        taking place, the ball must be tossed a minimum of 16 centimetres (6.3 in) in the air. The ITTF
                        states that all events after July 2014 are played with a new poly material
                        ball.<br/><br/>
                    </p>
                </div>
            </main>
            <Footer/>
        </>
    );
}