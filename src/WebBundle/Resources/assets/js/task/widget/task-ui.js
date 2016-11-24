export default class TaskUi {
  constructor(option) {
    this.element = $(option);
    this.learningPrompt = this.element.find('.js-learning-prompt');
    this.learnedPrompt = this.element.find('.js-learned-prompt');
    this.learnprompt = this.element.find('.js-learn-prompt');
    this.btnLearn = this.element.find('.js-btn-learn');
    this.init();
  }

  init() {
    $('.js-test').click(event=>this.learnedWeakPrompt());
    this.btnLearn.click(event=>this.learned());
  }

  learnedWeakPrompt() {
    this.learnprompt.removeClass('open');
    this.learningPrompt.addClass('moveup');
    window.setTimeout(()=> {
      this.learningPrompt.removeClass('moveup');
      this.learnedPrompt.addClass('moveup');
    }, 2000);
  }


  learned() {
    this.btnLearn.toggleClass('active');
  }
}