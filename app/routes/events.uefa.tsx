import Header from "../components/Header";
import Footer from "../components/Footer";
import UEFA_00 from "../IMG/2/UEFA_00.webp";
import UEFA_02 from "../IMG/2/UEFA_02.png";
import UEFA_04 from "../IMG/2/UEFA_04.png";
import UEFA_06 from "../IMG/2/UEFA_06.png";
import UEFA_08 from "../IMG/2/UEFA_08.png";
import UEFA_10 from "../IMG/2/UEFA_10.webp";
import RM from "../IMG/2/RM.webp";

export default function UEFA() {
  const grptb = [
    { grp: "Group A" },
    { grp: "Group B" },
    { grp: "Group C" },
    { grp: "Group D" },
    { grp: "Group E" },
    { grp: "Group F" },
    { grp: "Group G" },
    { grp: "Group H" },
  ];
  const t1tb = [
    { clb: "🇩🇪Bayern Munich" },
    { clb: "🏴󠁧󠁢󠁥󠁮󠁧󠁿Arse󠁧󠁢󠁥󠁮nal" },
    { clb: "🇪🇸Real Madrid" },
    { clb: "🇪🇸Real Sociedad" },
    { clb: "🇪🇸Atlético Madrid" },
    { clb: "🇩🇪Borussia Dortmund" },
    { clb: "🏴󠁧󠁢󠁥󠁮󠁧󠁿Manchester City" },
    { clb: "🇪🇸Barcelona" },
  ];
  const t2tb = [
    { clb: "🇩🇰Copenhagen" },
    { clb: "🇳🇱PSV Eindhoven" },
    { clb: "🇮🇹Napoli" },
    { clb: "🇮🇹Inter Milan" },
    { clb: "🇮🇹Lazio" },
    { clb: "🇫🇷Paris Saint-Germain" },
    { clb: "🇩🇪RB Leipzig" },
    { clb: "🇵🇹Porto" },
  ];
  const t3tb = [
    { clb: "🇹🇷Galatasaray" },
    { clb: "🇫🇷Lens" },
    { clb: "🇵🇹Braga" },
    { clb: "🇵🇹Benfica" },
    { clb: "🇳🇱Feyenoord" },
    { clb: "🇮🇹Milan" },
    { clb: "🇨🇭Young Boys" },
    { clb: "🇺🇦Shakhtar Donetsk" },
  ];
  const t4tb = [
    { clb: "🏴󠁧󠁢󠁥󠁮󠁧󠁿Manchester United" },
    { clb: "🇪🇸Sevilla" },
    { clb: "🇩🇪Union Berlin" },
    { clb: "🇦🇹Red Bull Salzburg" },
    { clb: "🏴󠁧󠁢󠁳󠁣󠁴󠁿Celtic" },
    { clb: "🏴󠁧󠁢󠁥󠁮󠁧󠁿Newcastle United" },
    { clb: "🇷🇸Red Star Belgrade" },
    { clb: "🇧🇪Antwerp" },
  ];
  const rostb = [
    { won: "󠁧󠁢Arsenal", agg: "1-1 (4-2)", lost: "Porto" },
    { won: "Barcelona", agg: "4-2", lost: "Napoli" },
    { won: "Paris Saint-Germain", agg: "4-1", lost: "Real Sociedad" },
    { won: "Atlético Madrid", agg: "2-2 (3-2)", lost: "Inter Milan" },
    { won: "Borussia Dortmund", agg: "3-1", lost: "PSV Eindhoven" },
    { won: "Bayern Munich", agg: "3-1", lost: "Lazio" },
    { won: "󠁧󠁢󠁥󠁮󠁧󠁿Manchester City", agg: "6-2", lost: "Copenhagen" },
    { won: "Real Madrid", agg: "2-1", lost: "RB Leipzig" },
  ];
  const qftb = [
    { won: "Bayern Munich", agg: "3-2", lost: "Arsenal" },
    { won: "Borussia Dortmund", agg: "5-4", lost: "Atlético Madrid" },
    { won: "Real Madrid", agg: "4-4 (4-3)", lost: "Manchester City" },
    { won: "Paris Saint-Germain", agg: "6-4", lost: "Barcelona" },
  ];
  const sftb = [
    { won: "Borussia Dortmund", agg: "2-0", lost: "Paris Saint-Germain" },
    { won: "Real Madrid", agg: "4-3", lost: "Bayern Munich" },
  ];
  const ftb = [{ won: "Real Madrid", agg: "2-0", lost: "Borussia Dortmund" }];
  return (
    <>
      <Header />
      <main>
        <img src={UEFA_00} alt="UEFA"></img>
        <div className="max-w-[70%] flex-[0_0_70%] m-auto">
          <p>
            The 2023–24 UEFA Champions League was the 69th season of
            Europe&apos;s premier club football tournament organised by UEFA,
            and the 32nd season since it was renamed from the European Champion
            Clubs&apos; Cup to the UEFA Champions League.
            <br />
            <br />
            Real Madrid defeated Borussia Dortmund 2–0 in the final, which was
            played at the Wembley Stadium in London, England, for a
            record-extending 15th European Cup title, and their sixth in eleven
            years. As winners, Real Madrid earned the right to play against
            Atalanta, the winners of the 2023–24 UEFA Europa League, in the 2024
            UEFA Super Cup. They also qualified for the final of the brand-new
            2024 FIFA Intercontinental Cup and the expanded 2025 FIFA Club World
            Cup in the United States.
            <br />
            <br />
            This was the final season with the current format of 32 teams
            participating in the group stage, following UEFA&apos;s announcement
            of a new expanded format to be introduced for the following edition.
            <br />
            <br />
            Manchester City were the defending champions, but were eliminated by
            eventual winners Real Madrid in the quarter-finals.
          </p>
          <img src={UEFA_02} alt="UEFA"></img>
          <table className="my-20 m-auto">
            <tbody>
              <tr>
                {grptb.map((grpdt) => (
                  <th
                    key={grpdt.grp}
                    className="border-2 border-solid border-slate-900 "
                  >
                    {grpdt.grp}
                  </th>
                ))}
              </tr>
              <tr>
                {t1tb.map((t1) => (
                  <td
                    key={t1.clb}
                    className="border-2 border-solid border-slate-900 text-sm px-1 bg-green-200"
                  >
                    {t1.clb}
                  </td>
                ))}
              </tr>
              <tr>
                {t2tb.map((t2) => (
                  <td
                    key={t2.clb}
                    className="border-2 border-solid border-slate-900 text-sm px-1 bg-green-200"
                  >
                    {t2.clb}
                  </td>
                ))}
              </tr>
              <tr>
                {t3tb.map((t3) => (
                  <td
                    key={t3.clb}
                    className="border-2 border-solid border-slate-900 text-sm px-1 bg-sky-200"
                  >
                    {t3.clb}
                  </td>
                ))}
              </tr>
              <tr>
                {t4tb.map((t4) => (
                  <td
                    key={t4.clb}
                    className="border-2 border-solid border-slate-900 text-sm px-1 bg-red-200"
                  >
                    {t4.clb}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <p>
            In the knockout phase, teams played against each other over two legs
            on a home-and-away basis, except for the one-match final. The
            mechanism of the draws for each round was as follows:
            <br />
            <br />
            -In the draw for the round of 16, the eight group winners were
            seeded, and the eight group runners-up were unseeded. The seeded
            teams were drawn against the unseeded teams, with the seeded teams
            hosting the second leg. Teams from the same group or the same
            association could not be drawn against each other.
            <br />
            <br />
            -In the draws for the quarter-finals and semi-finals, there were no
            seedings, and teams from the same group or the same association
            could be drawn against each other. As the draws for the
            quarter-finals and semi-finals were held together before the
            quarter-finals are played, the identity of the quarter-final winners
            was not known at the time of the semi-final draw. A draw was also
            held to determine which semi-final winner was designated as the home
            team for the final (for administrative purposes as it was played at
            a neutral venue).
          </p>
          <img src={UEFA_04} alt="UEFA"></img>
          <p>
            The draw for the round of 16 was held on 18 December 2023, 12:00
            CET. The first legs were played on 13, 14, 20 and 21 February, and
            the second legs were played on 5, 6, 12 and 13 March 2024.
          </p>
          <table className="my-5 m-auto">
            <tbody>
              {rostb.map((ros) => (
                <tr key={ros.won}>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-green-200">
                    {ros.won}
                  </td>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-sky-200 text-center">
                    {ros.agg}
                  </td>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-red-200">
                    {ros.lost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <img src={UEFA_06} alt="UEFA"></img>
          <p>
            The draw for the quarter-finals was held on 15 March 2024, 12:00
            CET. The first legs were played on 9 and 10 April, and the second
            legs were played on 16 and 17 April 2024.
          </p>
          <table className="my-5 m-auto">
            <tbody>
              {qftb.map((qf) => (
                <tr key={qf.won}>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-green-200">
                    {qf.won}
                  </td>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-sky-200 text-center">
                    {qf.agg}
                  </td>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-red-200">
                    {qf.lost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <img src={UEFA_08} alt="UEFA"></img>
          <p>
            The draw for the semi-finals was held on 15 March 2024, 12:00 CET,
            after the quarter-final draw. The first legs were played on 30 April
            and 1 May, and the second legs were played on 7 and 8 May 2024.
          </p>
          <table className="my-5 m-auto">
            <tbody>
              {sftb.map((sf) => (
                <tr key={sf.won}>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-green-200">
                    {sf.won}
                  </td>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-sky-200 text-center">
                    {sf.agg}
                  </td>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-red-200">
                    {sf.lost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <img src={UEFA_10} alt="UEFA"></img>
          <p>
            The final was played on 1 June 2024 at Wembley Stadium in London. A
            draw was held on 15 March 2024, after the quarter-final and
            semi-final draws, to determine the home team for administrative
            purposes.
          </p>
          <table className="my-5 m-auto">
            <tbody>
              {ftb.map((f) => (
                <tr key={f.won}>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-green-200">
                    {f.won}
                  </td>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-sky-200 text-center">
                    {f.agg}
                  </td>
                  <td className="border-2 border-solid border-slate-900 p-2 bg-red-200">
                    {f.lost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <img src={RM} alt="RM"></img>
        </div>
      </main>
      <Footer />
    </>
  );
}
