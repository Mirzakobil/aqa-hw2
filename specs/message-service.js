const {
  startClientPC,
  startSatelite,
  stopClientPC,
  stopEarthServer,
  stopSatelite,
  stopMarsServer,
  startEarthServer,
  startMarsServer,
  sendMessage,
  assertResponse,
} = require('./stubs/messageservice.stubs');

// REMOVE THE BELOW CODE BEFORE START THE EXERCISE

function startAllNodes() {
  startClientPC();
  const earthToken = startEarthServer();
  const marsToken = startMarsServer();
  startSatelite();
  return {
    earth: earthToken,
    mars: marsToken,
  };
}

function stopAllNodes() {
  stopMarsServer();
  stopEarthServer();
  stopSatelite();
  stopClientPC();
}

describe('Message sending', function () {
  context('Message to Earth', function () {
    it('should send message to Earth without error', function () {
      let tokens = startAllNodes();
      const response = sendMessage('Hello', 'Earth', tokens.earth);
      assertResponse(response, 'Success');
      stopAllNodes();
    });
    it('should send message to Earth with "Security Error"', function () {
      startAllNodes();
      const response = sendMessage('Hello', 'Earth', 'X0000');
      assertResponse(response, 'Security Error');
      stopAllNodes();
    });
  });
  context('Message to Mars', function () {
    it('should send message to Mars without error', function () {
      let tokens = startAllNodes();
      const response = sendMessage('Hello', 'Mars', tokens.mars);
      assertResponse(response, 'Success');
      stopAllNodes();
    });
    it('should send message to Mars with "Security Error"', function () {
      startAllNodes();
      const response = sendMessage('Hello', 'Mars', 'z0101');
      assertResponse(response, 'Security Error');
      stopAllNodes();
    });

    it('should send message to Mars with valid token and "Service is unavailable" error', function () {
      startAllNodes();
      stopSatelite();
      const response = sendMessage('Hello', 'Mars', startMarsServer());
      assertResponse(response, 'Service is unavailable');
      stopAllNodes();
    });

    it('should send message to Mars with "Security Error" and "Service is unavailable" error', function () {
      startAllNodes();
      stopSatelite();
      const response = sendMessage('Hello', 'Mars', 'M1021');
      assertResponse(response, 'Service is unavailable' || 'Security Error');
      stopAllNodes();
    });
  });
});
