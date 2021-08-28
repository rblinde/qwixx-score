class App {
  constructor() {
    this.checkboxElems = [...document.querySelectorAll('input[type="checkbox"]')];
    this.scoreElems = {
      red: document.querySelector('.field.red'),
      yellow: document.querySelector('.field.yellow'),
      green: document.querySelector('.field.green'),
      blue: document.querySelector('.field.blue'),
      wrong: document.querySelector('.field.wrong'),
      total: document.querySelector('.field.total'),
    };

    // Add eventlisteners
    this.checkboxElems.forEach(c => c.addEventListener('change', this.handleNumberClick.bind(this), false));
    this.scoreElems.wrong.addEventListener('click', this.handleWrongTurn.bind(this), false)
  }


  /**
   * Updates total score based on colors and wrong
   */
  setTotalScore() {
    const { red, yellow, green, blue, wrong } = this.scores;
    this.scores.total = red + yellow + green + blue - wrong;
  }


  /**
   * Updates DOM elements with correct score
   */
  updateDOM() {
    for (const i in this.scoreElems) {
      this.scoreElems[i].textContent  = this.scores[i];
    }
  }


  /**
   * Converts number of checks to points
   * @param   {Number} checks
   * @returns {Number} points
   */
  checksToPoints(checks) {
    return 0.5 * checks + 0.5 * checks * checks;
  }


  /**
   * Calculates new score for row of clicked checkbox
   * @param {Event} e click event
   */
  handleNumberClick(e) {
    const row = e.target.parentNode.parentNode;
    const checkboxes = [...row.querySelectorAll('input')];
    const checks = checkboxes.filter(c => !!c.checked).length;
    const color = row.dataset.color;

    this.scores[color] = this.checksToPoints(checks);
    this.setTotalScore();
    this.updateDOM();
  }


  /**
   * Adds 5 to scores.wrong, resets after 20
   */
  handleWrongTurn() {
    if (this.scores.wrong === 20) {
      this.scores.wrong = -5; // Reset to zero
    }

    this.scores.wrong += 5;
    this.setTotalScore();
    this.updateDOM();
  }


  /**
   * Start/restart game by clearing checkboxes and scores
   */
  start() {
    this.scores = {
      red: 0,
      yellow: 0,
      green: 0,
      blue: 0,
      wrong: 0,
      total: 0,
    };

    for (const checkbox of this.checkboxElems) {
      checkbox.checked = false;
      checkbox.disabled = false;
    }

    this.updateDOM();
  }
}

export default App;
