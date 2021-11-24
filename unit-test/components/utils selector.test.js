import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UtilSelector from "./util-selector";

const { capText, defaultText } = {
  defaultText:
    "O Captain! my Captain! our fearful trip is done, The ship has weather’d every rack, the prize we sought is won, The port is near, the bells I hear, the people all exulting, While follow eyes the steady keel, the vessel grim and daring; But O heart! heart! heart! O the bleeding drops of red, Where on the deck my Captain lies, Fallen cold and dead. O Captain! my Captain! rise up and hear the bells; Rise up—for you the flag is flung—for you the bugle trills, For you bouquets and ribbon’d wreaths—for you the shores a-crowding, For you they call, the swaying mass, their eager faces turning; Here Captain! dear father! This arm beneath your head! It is some dream that on the deck, You’ve fallen cold and dead. My Captain does not answer, his lips are pale and still, My father does not feel my arm, he has no pulse nor will, The ship is anchor’d safe and sound, its voyage closed and done, From fearful trip the victor ship comes in with object won; Exult O shores, and ring O bells! But I with mournful tread, Walk the deck my Captain lies, Fallen cold and dead.",
  capText:
    "O Captain! My Captain! Our Fearful Trip Is Done, The Ship Has Weather’d Every Rack, The Prize We Sought Is Won, The Port Is Near, The Bells I Hear, The People All Exulting, While Follow Eyes The Steady Keel, The Vessel Grim And Daring; But O Heart! Heart! Heart! O The Bleeding Drops Of Red, Where On The Deck My Captain Lies, Fallen Cold And Dead. O Captain! My Captain! Rise Up And Hear The Bells; Rise Up—for You The Flag Is Flung—for You The Bugle Trills, For You Bouquets And Ribbon’d Wreaths—for You The Shores A-crowding, For You They Call, The Swaying Mass, Their Eager Faces Turning; Here Captain! Dear Father! This Arm Beneath Your Head! It Is Some Dream That On The Deck, You’ve Fallen Cold And Dead. My Captain Does Not Answer, His Lips Are Pale And Still, My Father Does Not Feel My Arm, He Has No Pulse Nor Will, The Ship Is Anchor’d Safe And Sound, Its Voyage Closed And Done, From Fearful Trip The Victor Ship Comes In With Object Won; Exult O Shores, And Ring O Bells! But I With Mournful Tread, Walk The Deck My Captain Lies, Fallen Cold And Dead.",
};

describe("UtilSelector", () => {
  it("should render capital case text and return to default", () => {
    render(<UtilSelector />);
    userEvent.click(screen.getByText("toCapitalCase"));
    expect(screen.getByText(capText)).toBeInTheDocument();
    userEvent.click(screen.getByText("toCapitalCase"));
    expect(screen.getByText(defaultText)).toBeInTheDocument();
  });
});
