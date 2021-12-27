"use strict";

module.exports = function (Meetup) {
  Meetup.createMeetUp = async (meetUp) => {
    try {
      const response = await Meetup.create(meetUp);
      return response;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};
