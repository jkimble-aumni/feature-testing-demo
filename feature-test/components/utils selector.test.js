import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UtilSelector from "./util-selector";

const { capPig, capText, defaultText, pOne, pThree, pTwo, pigText } = {
  defaultText:
    "O Captain! my Captain! our fearful trip is done, The ship has weather’d every rack, the prize we sought is won, The port is near, the bells I hear, the people all exulting, While follow eyes the steady keel, the vessel grim and daring; But O heart! heart! heart! O the bleeding drops of red, Where on the deck my Captain lies, Fallen cold and dead. O Captain! my Captain! rise up and hear the bells; Rise up—for you the flag is flung—for you the bugle trills, For you bouquets and ribbon’d wreaths—for you the shores a-crowding, For you they call, the swaying mass, their eager faces turning; Here Captain! dear father! This arm beneath your head! It is some dream that on the deck, You’ve fallen cold and dead. My Captain does not answer, his lips are pale and still, My father does not feel my arm, he has no pulse nor will, The ship is anchor’d safe and sound, its voyage closed and done, From fearful trip the victor ship comes in with object won; Exult O shores, and ring O bells! But I with mournful tread, Walk the deck my Captain lies, Fallen cold and dead.",
  capText:
    "O Captain! My Captain! Our Fearful Trip Is Done, The Ship Has Weather’d Every Rack, The Prize We Sought Is Won, The Port Is Near, The Bells I Hear, The People All Exulting, While Follow Eyes The Steady Keel, The Vessel Grim And Daring; But O Heart! Heart! Heart! O The Bleeding Drops Of Red, Where On The Deck My Captain Lies, Fallen Cold And Dead. O Captain! My Captain! Rise Up And Hear The Bells; Rise Up—for You The Flag Is Flung—for You The Bugle Trills, For You Bouquets And Ribbon’d Wreaths—for You The Shores A-crowding, For You They Call, The Swaying Mass, Their Eager Faces Turning; Here Captain! Dear Father! This Arm Beneath Your Head! It Is Some Dream That On The Deck, You’ve Fallen Cold And Dead. My Captain Does Not Answer, His Lips Are Pale And Still, My Father Does Not Feel My Arm, He Has No Pulse Nor Will, The Ship Is Anchor’d Safe And Sound, Its Voyage Closed And Done, From Fearful Trip The Victor Ship Comes In With Object Won; Exult O Shores, And Ring O Bells! But I With Mournful Tread, Walk The Deck My Captain Lies, Fallen Cold And Dead.",
  pigText:
    "oay aptaincay! myay aptaincay! ouray earfulfay iptray isay one, theday ipshay ashay eather’dway everyay ackray, ethay izepray eway oughtsay isay on, theway ortpay isay earnay, ethay ellsbay iay earhay, ethay eoplepay allay exulting, whileay ollowfay eyesay ethay eadystay eelkay, ethay esselvay imgray anday aring; butday oay earthay! earthay! earthay! oay ethay eedingblay opsdray ofay ed, whereray onay ethay eckday myay aptaincay ieslay, allenfay oldcay anday ead. oday aptaincay! myay aptaincay! iseray upay anday earhay ethay ells; risebay up—foray ouyay ethay agflay isay ung—forflay ouyay ethay uglebay ills, fortray ouyay ouquetsbay anday ibbon’dray eaths—forwray ouyay ethay oresshay a-crowding, foray ouyay eythay allcay, ethay ayingsway assmay, eirthay eageray acesfay urning; heretay aptaincay! earday atherfay! isthay armay eneathbay ouryay eadhay! itay isay omesay eamdray atthay onay ethay eck, you’veday allenfay oldcay anday ead. myday aptaincay oesday otnay answeray, ishay ipslay areay alepay anday ill, mystay atherfay oesday otnay eelfay myay armay, ehay ashay onay ulsepay ornay ill, theway ipshay isay anchor’day afesay anday oundsay, itsay oyagevay osedclay anday one, fromday earfulfay iptray ethay ictorvay ipshay omescay inay ithway objectay on; exultway oay oresshay, anday ingray oay ellsbay! utbay iay ithway ournfulmay ead, walktray ethay eckday myay aptaincay ies, fallenlay oldcay anday eadday.",
  capPig:
    "Oay Aptaincay! Myay Aptaincay! Ouray Earfulfay Iptray Isay One, theday Ipshay Ashay Eather’dway Everyay Ackray, Ethay Izepray Eway Oughtsay Isay On, theway Ortpay Isay Earnay, Ethay Ellsbay Iay Earhay, Ethay Eoplepay Allay Exulting, whileay Ollowfay Eyesay Ethay Eadystay Eelkay, Ethay Esselvay Imgray Anday Aring; butday Oay Earthay! Earthay! Earthay! Oay Ethay Eedingblay Opsdray Ofay Ed, whereray Onay Ethay Eckday Myay Aptaincay Ieslay, Allenfay Oldcay Anday Ead. oday Aptaincay! Myay Aptaincay! Iseray Upay Anday Earhay Ethay Ells; risebay Up—foray Ouyay Ethay Agflay Isay Ung—forflay Ouyay Ethay Uglebay Ills, fortray Ouyay Ouquetsbay Anday Ibbon’dray Eaths—forwray Ouyay Ethay Oresshay A-crowding, foray Ouyay Eythay Allcay, Ethay Ayingsway Assmay, Eirthay Eageray Acesfay Urning; heretay Aptaincay! Earday Atherfay! Isthay Armay Eneathbay Ouryay Eadhay! Itay Isay Omesay Eamdray Atthay Onay Ethay Eck, you’veday Allenfay Oldcay Anday Ead. myday Aptaincay Oesday Otnay Answeray, Ishay Ipslay Areay Alepay Anday Ill, mystay Atherfay Oesday Otnay Eelfay Myay Armay, Ehay Ashay Onay Ulsepay Ornay Ill, theway Ipshay Isay Anchor’day Afesay Anday Oundsay, Itsay Oyagevay Osedclay Anday One, fromday Earfulfay Iptray Ethay Ictorvay Ipshay Omescay Inay Ithway Objectay On; exultway Oay Oresshay, Anday Ingray Oay Ellsbay! Utbay Iay Ithway Ournfulmay Ead, walktray Ethay Eckday Myay Aptaincay Ies, fallenlay Oldcay Anday Eadday.",
  pOne: "O Captain! my Captain! our fearful trip is done, The ship has weather’d every rack, the prize we sought is won, The port is near, the bells I hear, the people all exulting, While follow eyes the steady keel, the vessel grim and daring; But O heart! heart! heart! O the bleeding drops of red, Where on the deck my Captain lies, Fallen cold and dead.",
  pTwo: "O Captain! my Captain! rise up and hear the bells; Rise up—for you the flag is flung—for you the bugle trills, For you bouquets and ribbon’d wreaths—for you the shores a-crowding, For you they call, the swaying mass, their eager faces turning; Here Captain! dear father! This arm beneath your head! It is some dream that on the deck, You’ve fallen cold and dead.",
  pThree:
    "My Captain does not answer, his lips are pale and still, My father does not feel my arm, he has no pulse nor will, The ship is anchor’d safe and sound, its voyage closed and done, From fearful trip the victor ship comes in with object won; Exult O shores, and ring O bells! But I with mournful tread, Walk the deck my Captain lies, Fallen cold and dead.",
};

describe("UtilSelector", () => {
  it("should render default text & util selectors", () => {
    render(<UtilSelector />);
    expect(screen.getByText("toPigLatin")).toBeInTheDocument();
    expect(screen.getByText("toCapitalCase")).toBeInTheDocument();
    expect(screen.getByText("toParagraphs")).toBeInTheDocument();
    expect(screen.getByText(defaultText)).toBeInTheDocument();
  });

  it("should render capital case text and return to default", () => {
    render(<UtilSelector />);
    userEvent.click(screen.getByText("toCapitalCase"));
    expect(screen.getByText(capText)).toBeInTheDocument();
    userEvent.click(screen.getByText("toCapitalCase"));
    expect(screen.getByText(defaultText)).toBeInTheDocument();
  });

  it("should render pig latin text", () => {
    render(<UtilSelector />);
    userEvent.click(screen.getByText("toPigLatin"));
    expect(screen.getByText(pigText)).toBeInTheDocument();
  });

  it("should render pig latin text", () => {
    render(<UtilSelector />);
    userEvent.click(screen.getByText("toPigLatin"));
    userEvent.click(screen.getByText("toCapitalCase"));
    expect(screen.getByText(capPig)).toBeInTheDocument();
  });

  it("should render paragraphs text", () => {
    render(<UtilSelector />);
    userEvent.click(screen.getByText("toParagraphs"));
    expect(screen.getByText(pOne)).toBeInTheDocument();
    expect(screen.getByText(pTwo)).toBeInTheDocument();
    expect(screen.getByText(pThree)).toBeInTheDocument();
  });
});
