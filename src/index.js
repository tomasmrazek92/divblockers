$(document).ready(function () {
  // #region Loader

  function preLoader() {
    let loaderEl = $('.preloader');
    let logoBox = $('.preloader_logo');
    let logoLine = $('.preloader_line');
    let logoBorder = $('.preloader_border');
    let logoLogoText = $('.preloader_logo-text');
    let logoLabel = $('.preloader .div-block_label');
    let logoIntroText = $('.preloader_text');
    let loader = gsap.timeline();

    loader.to(logoBox.add(logoIntroText), { css: { fontWeight: 500, opacity: 1 }, duration: 1 });
    loader.to(
      logoIntroText,
      {
        scale: 0.25,
        yPercent: -63,
        xPercent: -30,
        text: 'we-are',
        duration: 0.5,
        ease: 'expo.out',
      },
      '+=0.3'
    );
    loader.fromTo(
      logoLine.eq(0),
      { xPercent: 100 },
      { xPercent: 0, opacity: 1, duration: 0.5 },
      '<'
    );
    loader.addLabel('Show Label');
    loader.fromTo(
      logoLine.eq(1),
      { xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 0.5 },
      '<'
    );
    loader.fromTo(
      logoLine.eq(2),
      { yPercent: 100 },
      { yPercent: 0, opacity: 1, duration: 0.5 },
      '<'
    );
    loader.fromTo(
      logoLine.eq(3),
      { yPercent: -100 },
      { yPercent: 0, opacity: 1, duration: 0.5 },
      '<'
    );
    loader.to([logoLine.eq(0), logoLine.eq(1)], { scaleX: 0, duration: 1 });
    loader.to([logoLine.eq(2), logoLine.eq(3)], { scaleX: 0, duration: 0.35 }, '<');
    loader.to(logoBorder, { opacity: 1 }, '<');
    loader.to(logoLabel, { opacity: 1 }, 'Show Label');
    loader.to(logoIntroText, { opacity: 0 }, '<');

    loader.to(logoLogoText, { opacity: 1 }, '<0.2');
    loader.to(logoBox, { width: '110vw', height: '110dvh', duration: 0.75 });
    loader.to(logoLogoText, { opacity: 0 }, '<');
    loader.to($('.page-wrapper'), { opacity: 1 }, '<');
    loader.to(loaderEl, { display: 'none' });
  }
  $('.page-wrapper').css('opacity', ' 1');
  $('.preloader').hide();

  // Init
  // preLoader();

  // #endregion

  // #region Hero

  // --- Hero Lines
  function animateHeroLines() {
    function pulseLines(el) {
      let element = $(el);

      const opacities = [0.2, 1.0, 0.8, 0.6, 0.4, 0.3, 0.2]; // Opacity levels, start and end at 0.1
      const numPaths = 7; // Total number of paths
      const duration = 0.4; // Duration for each opacity change

      // Create a GSAP timeline with repeating
      let tl = gsap.timeline({
        repeat: -1, // Repeat indefinitely
        repeatDelay: 0, // Delay of 3 seconds after each complete cycle
        onStart: () => setInitialOpacities(0.2, element), // Set all paths to 0.1 at start
        onRepeat: () => setInitialOpacities(0.2, element), // Ensure paths reset to 0.1 on repeat
      });

      // Function to set all paths to a specific opacity
      function setInitialOpacities(opacity, el) {
        for (let i = 1; i <= numPaths; i++) {
          gsap.set($(el).find(`#path-${i}`), { opacity: opacity });
        }
      }

      // Function to set up the animation sequence
      function setupAnimations(element) {
        for (let i = 1; i <= numPaths; i++) {
          // Start animations for each path with a reverse stagger
          let pathDelay = (numPaths - i) * 0.1; // Reversed initial stagger for each path

          for (let step = 0; step < opacities.length; step++) {
            // Schedule the animation for the current path
            tl.to(
              $(element).find(`#path-${i}`),
              {
                opacity: opacities[step],
                duration: duration,
                ease: 'none',
              },
              pathDelay + step * duration
            ); // Continue next opacity immediately after the previous
          }
        }
      }

      // Initialize animations
      setupAnimations(element);
      return tl;
    }

    function animateSVGPaths(el) {
      let element = $(el);
      // Register GSAP Plugin
      gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

      const basicParam = {
        repeat: -1,
        repeatDelay: 1,
        ease: 'power1.inOut',
        motionPath: {
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
      };

      function calculateDelay(num) {
        if (!num.includes('-')) return 0;
        let suffix = parseInt(num.split('-')[1], 10);
        return suffix * 5; // Assuming the delay increases by 5 seconds for each step
      }

      const tl = gsap.timeline();
      ['1', '2', '3', '4', '5', '6', '7'].forEach((num) => {
        let delay = calculateDelay(num);

        // Debug: log the element to check if it exists
        let visualElement = $(element).find(`#line-visual-${num}`).get(0);
        let pathElement = $(element).find(`#path-${num}`).get(0);

        if (!visualElement || !pathElement) {
          console.error(
            'GSAP target not found:',
            visualElement ? `#path-${num}` : `#line-visual-${num}`
          );
          return; // Skip this iteration if elements are not found
        }

        tl.to(
          $(element).find(`#line-visual-${num}`).get(0),
          {
            ...basicParam,
            delay,
            duration: gsap.utils.random(5, 10),
            motionPath: {
              ...basicParam.motionPath,
              path: $(element).find(`#path-${num}`).get(0),
              align: $(element).find(`#path-${num}`).get(0),
            },
          },
          '<'
        );
      });
    }

    $('[data-animation="lines"]').each(function () {
      pulseLines($(this));
      animateSVGPaths($(this));
    });
  }

  // --- Hero Scroll
  function heroSticky() {
    let heroHeading = $('.hero-wrap_heading h1');
    let heroPar = $('.hero-wrap_par');
    let heroUI = $('[data-hero-ui]');
    let heroLines = $('.hero-wrap_lines');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $('.section_work'),
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
        markers: true,
      },
    });

    tl.to(heroHeading, {
      y: () => {
        return heroPar.outerHeight() / 2;
      },
      keyframes: {
        '20%': { opacity: 0.15 },
      },
    });
    tl.to(
      heroHeading,
      {
        filter: 'blur(10px)',
        opacity: 0.15,
      },
      '<+=0.4'
    );

    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: $('.section_work'),
        start: '300 bottom',
        invalidateOnRefresh: true,
        toggleActions: 'play none none reverse',
      },
    });

    tl1.to(
      [heroPar, heroLines, heroUI],
      {
        opacity: 0,
        duration: 0.5,
      },
      '<'
    );
  }

  // ---- Label Color Change
  function titleColor() {
    let label = $('.hero-wrap_heading').find('._wf-ui_label');
    let title = $('.hero-wrap_heading h1');

    $('._wf-ui-colors-block').on('click', function () {
      let color = $(this).css('background-color');
      updateLabel(label, true);
      title.css('color', color);
      $('html').css('--wf-ui--lines', color);
    });

    $(label).on('click', function () {
      if ($(this).hasClass(editClass)) {
        updateLabel(label, false);
        title.css('color', 'inherit');
        $('html').css('--wf-ui--lines', 'var(--color--main)');
      }
    });
  }

  function updateLabel(label, toggle) {
    let editClass = 'edit';
    if (toggle) {
      label.addClass(editClass);
    } else {
      label.removeClass(editClass);
    }
  }

  // --- Actual Time
  function heroTime() {
    // Time
    var { DateTime } = luxon;

    function updateTime() {
      var userLocalTime = DateTime.local();
      var estTime = userLocalTime.setZone('Europe/Paris').toFormat('hh:mm a');
      $('[data-real-time]').text(estTime + ' CET');
    }

    // Load
    updateTime();

    // Real Time
    setInterval(updateTime, 1000);
  }

  // --- Changing of random worlds
  function updateNavBrand() {
    let x = 0;
    $('[data-hero-brand]').on('click', function () {
      let texts = [
        'Just homepage, sry..',
        'Definitely not SVG',
        'Web Dev Bois',
        'superheroes',
        'friends',
        'running out of ideas',
        'check the projects pls',
        'stop now',
        'for real?',
        'one more',
        'maybe one more',
        'DivBlockers',
      ];
      $(this).text(texts[x]);
      x = (x + 1) % texts.length; // Increment x, and reset if it equals texts length
    });
  }

  // Team Tooltips
  function teamTips() {
    tippy('[data-tippy-content]', {
      content(reference) {
        const content = reference.getAttribute('data-tippy-content');
        return content;
      },
      animation: 'shift-toward',
      theme: 'translucent',
    });
  }

  // Init
  heroSticky();
  titleColor();
  heroTime();
  updateNavBrand();
  teamTips();
  animateHeroLines();

  // #endregion

  // #region Header

  // ---- Update Heading
  let heroBox = $('.hp-hero_head-inner');
  let heroTitle = $('.hero-title_b');
  let heroHeading = $('.hp-hero_head h1');
  let heroForm = $('.hp-hero_form');
  let originalTitle = heroTitle.html();
  let originalHeading = heroHeading.html();
  let emailIcon = $('#email-icon');
  let emailLabel = $('#email-label');

  $('._wf-ui_styles-icon').on('click', function () {
    let label = $(this).closest('._wf-ui').find('._wf-ui_label');

    // Get Type
    let type = $(this).attr('visual');

    // Check if submit
    if (type === 'custom' && $(this).hasClass('is-active')) {
      $('#form-submit').trigger('click');
    }

    // Reset
    $('._wf-ui_styles-icon').removeClass('is-active');
    $(this).addClass('is-active');
    label.text('Select one');

    // Heading
    heroHeading.removeClass('custom-heading');
    heroHeading.removeAttr('style');

    // Form
    heroForm.hide();
    emailIcon.show();
    emailLabel.hide();

    // Label
    label.addClass('edit');

    if (type === 'default') {
      // Styles
      heroForm.find('textarea').val('');
      heroForm.hide();
      heroForm.find('textarea').removeAttr('style');

      heroTitle.html(originalTitle);
      heroHeading.html(originalHeading);

      label.removeClass('edit');
    } else if (type === 'cross') {
      heroHeading.html(originalHeading);
      let split = new SplitType(heroHeading, { types: 'words' });
      heroTitle.find('p').text('Working together');
      $(heroHeading).find('.word').addClass('active');
      label.text('Decoration');
    } else if (type === 'emoji') {
      heroTitle.find('p').text('Our Story so far:');
      heroHeading.css({ 'font-size': '8em', 'line-height': '1.31' });
      label.text('Story time');

      // Emoji
      $(heroHeading).html(
        '<span id="1">🤳🏻</span><span id="2">😓</span><span id="3">⏳</span><span id="4">🙋🏻‍♂️</span><span id="5">🤝</span><span id="6">👨🏻‍💻</span><span id="7">👨🏼‍💻</span><span id="8">💰<br></span><span id="9">🟦</span><span id="10">🚀</span><span id="11">6️⃣</span><span id="12">8️⃣</span><span id="13">⛷️</span><span id="14">🏂</span><span id="15">✈️</span><span id="16">🇬🇧</span><span id="17">🎉</span><span id="18">3️⃣</span><span id="19">💙</span><span id="20">🌎</span><span id="21">💨</span>'
      );
      let tl = gsap.timeline();
      tl.fromTo(
        $(heroHeading).find('span'),
        {
          visibility: 'hidden',
        },
        {
          visibility: 'visible',
          stagger: 0.03,
        }
      );
    } else if (type === 'custom') {
      emailIcon.hide();
      heroHeading.hide();
      heroForm.show();
      emailLabel.show();
      label.text('Leave us a message');
    }
  });

  $(window).on('resize', function () {
    if (!$('._wf-ui_styles-icon').eq(0).hasClass('is-active')) {
      $('._wf-ui_styles-icon').eq(0).click();
    }
  });

  // Dynamic Font Size Input
  $(document).ready(function () {
    var $textarea = $('.hp-hero_input');
    var minFontSize = 24; // Minimum font size
    var characterThreshold = 20; // Start reducing font size after this many characters
    var initialFontSize = parseInt($textarea.css('font-size'), 10); // Get the initial font size from CSS
    var maxHeight = $textarea.height(); // Get the max height of the textarea

    // Function to update font size
    function updateFontSize() {
      var textLength = $textarea.val().length;
      var currentFontSize = parseInt($textarea.css('font-size'), 10);

      if (textLength <= characterThreshold && currentFontSize !== initialFontSize) {
        $textarea.css('font-size', initialFontSize + 'px'); // Reset font size to initial if below threshold
      } else if (textLength > characterThreshold) {
        var { scrollHeight } = $textarea.get(0);
        if (scrollHeight > maxHeight && currentFontSize > minFontSize) {
          // Decrease font size
          var newFontSize = Math.max(currentFontSize - 1, minFontSize);
          $textarea.css('font-size', newFontSize + 'px');
        }
      }
    }

    // Bind the input event to the textarea
    $textarea.on('input', updateFontSize);

    /* Update initial font size on window resize
    $(window).on('resize', function () {
      initialFontSize = parseInt($textarea.css('font-size'), 10); // Update the initial font size
      maxHeight = $textarea.height(); // Update the max height of the textarea
      updateFontSize(); // Update the font size immediately on resize
    });
    */
  });

  // ---- Keep the same height
  checkH1Size(heroBox);
  $(window).on('resize', function () {
    checkH1Size(heroBox);
  });

  function setDimension(el, dimension) {
    const current = $(el)[dimension]();
    $(el)[dimension]('auto');
    const original = $(el)[dimension]();
    $(el)[dimension](current);
    return original;
  }

  function checkH1Size(el) {
    ['height', 'width'].forEach((dim) => {
      const original = setDimension(el, dim);
      $(el)[dim](original);
    });
  }

  // #endregion

  // #region Works

  // Modular
  function modular() {
    let tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'power3.inOut',
      },
    });

    tl.fromTo(
      $('.modular-chip'),
      {
        xPercent: -100,
        yPercent: 100,
      },
      {
        xPercent: 0,
        yPercent: 0,
        opacity: 1,
        stagger: 0.1,
      }
    );

    // Hover functionality
    $('.work_item-block.modular').hover(
      function () {
        // Hover in
        tl.play();
      },
      function () {
        // Hover out
        tl.reverse();
      }
    );
  }

  // Tiny
  function tiny() {
    let tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'power2.inOut',
      },
    });

    // init
    tl.to($('.tiny-person._1'), { xPercent: 100, duration: 1 });
    tl.to($('.tiny-person._2'), { xPercent: -100, duration: 1 }, '<0.2');

    let tl2 = gsap.timeline({
      paused: true,
      repeat: -1,
      yoyo: true,
      ease: 'power3.inOut',
    });
    tl2.to($('.tiny-person._1'), { rotate: 3, duration: 2 });
    tl2.to($('.tiny-person._2'), { rotate: -3, duration: 2 }, '<');

    // Hover functionality
    $('.work_item-block.tiny').hover(
      function () {
        // Hover in
        tl.play();
        tl2.play();
        $(this).addClass('animation-play');
      },
      function () {
        // Hover out
        tl.reverse();
        $(this).removeClass('animation-play');
      }
    );
  }

  // DocuSign
  function DocuSign() {
    $('.work_item-block.docusign').hover(
      function () {
        let video = $(this).find('video')[0];
        if (video.paused) {
          video.play();
        }
      },
      function () {
        let video = $(this).find('video')[0];
        if (video.played) {
          video.pause();
        }
      }
    );
  }

  // VSCO
  function vsco() {
    let tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'power3.out',
      },
    });

    tl.from($('.vsco-card'), {
      yPercent: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
    });

    // Hover functionality
    $('.work_item-block.vsco').hover(
      function () {
        // Hover in
        tl.play();
      },
      function () {
        // Hover out
        tl.reverse();
      }
    );
  }

  // Firstround
  function Firstround() {
    var pix = document.getElementsByClassName('pixel');

    for (var i = 0; i < pix.length; i++) {
      pix[i].style.animationDelay = Math.ceil(Math.random() * 5000) + 'ms';
    }

    // Pause after 4s to create a pattern
    setTimeout(function () {
      for (var i = 0; i < pix.length; i++) {
        pix[i].classList.add('paused');
      }
    }, 4000);
  }

  // Together
  function together() {
    const logo = $('.together-logo');
    const ball = $('.together-ball');
    const text1 = $('.together-text-1');
    const text2 = $('.together-text-2');

    let tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'power1.inOut',
      },
    });

    tl.to(logo, { opacity: 0, duration: 0.3 });
    tl.to(ball, { y: '0%', width: '65%', duration: 0.8 }, '<');
    tl.fromTo(text1, { xPercent: -15 }, { xPercent: 0, opacity: 1 }, '<0.3');
    tl.fromTo(text2, { xPercent: 15 }, { xPercent: 0, opacity: 1, stagger: 0.2 }, '<.02');

    // Hover functionality
    $('.work_item-block.together').hover(
      function () {
        // Hover in
        tl.play();
      },
      function () {
        // Hover out
        tl.reverse();
      }
    );
  }

  // Polywork
  function polywork() {
    let polyworkShape = $('.polywork-shape');

    let tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'power1.inOut',
      },
    });

    tl.fromTo(
      polyworkShape.eq(0),
      {
        rotate: '-15deg',
        xPercent: 5,
        scale: 0.8,
      },
      {
        rotate: '0',
        xPercent: 0,
        scale: 1,
      }
    );
    tl.fromTo(
      polyworkShape.eq(1),
      {
        rotate: '15deg',
        scale: 0.8,
      },
      {
        rotate: '0',
        scale: 1,
      },
      '<'
    );
    tl.fromTo(
      polyworkShape.eq(2),
      {
        scale: 0,
      },
      {
        scale: 1,
      },
      '<'
    );

    // Hover functionality
    $('.work_item-block.polywork').hover(
      function () {
        // Hover in
        tl.play();
      },
      function () {
        // Hover out
        tl.reverse();
      }
    );
  }

  //Atoms
  function atoms() {
    var video = $('.work_item-block.atoms').find('video')[0];
    $('.work_item-block.atoms').on('mouseenter', function () {
      // button function for 4x fast speed forward
      video.playbackRate = 1.0;
      video.play();
    });

    $('.work_item-block.atoms').on('mouseleave', function () {
      // button function for rewind
      video.playBackwards();
    });

    HTMLVideoElement.prototype.playBackwards = function () {
      this.pause();

      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var video = this;

      var fps = 25;
      var intervalRewind = setInterval(function () {
        if (video.currentTime === 0) {
          clearInterval(intervalRewind);
          video.pause();
        } else {
          video.currentTime += -(1.5 / fps);
        }
      }, 1000 / fps);
    };
  }

  //Modernlife
  function modernLife() {
    let bgBase = $('.modernlife_bg-base');
    let bgImage = $('.modernlife_bg-inner');

    let tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'power1.inOut',
      },
    });

    tl.to(bgBase, {
      scale: 0.4,
      xPercent: 19,
      yPercent: -22,
    });
    tl.to(
      bgImage,
      {
        scale: 0.4,
        xPercent: 18,
        yPercent: -21.5,
      },
      '<'
    );

    // Hover functionality
    $('.work_item-block.modernlife').hover(
      function () {
        // Hover in
        tl.play();
      },
      function () {
        // Hover out
        tl.reverse();
      }
    );
  }

  // Cache
  function cache() {
    // Vars
    let activeIndex = 0;
    let fastReveal = { keyframes: { '50%': { opacity: 1 } } };
    let boxDuration = 0.7;
    let boxStagger = 0.15;

    // Elements
    let boxes = $('.cache_box');
    let avatar = $('.cache_avatar');
    let order = [1, 4, 0, 3, 2];
    let orderedBoxes = $($.map(order, (index) => boxes[index]));

    // BOUNCES
    CustomBounce.create('boxBounce', {
      strength: 0.25,
      squash: 10,
    });
    CustomBounce.create('mainBounce', {
      strength: 0.3,
      squash: 0.3,
    });

    // Intro Animation
    let introTl = gsap.timeline({
      paused: true,
    });

    introTl
      .fromTo(
        orderedBoxes,
        { opacity: 0, y: '-30em' },
        { ...fastReveal, y: '0', stagger: boxStagger, ease: 'boxBounce', duration: boxDuration }
      )
      .to(
        orderedBoxes,
        {
          yPercent: -50,
          rotate: 8,
          duration: boxDuration,
          stagger: boxStagger,
          ease: 'boxBounce-squash',
        },
        0
      )
      .to(orderedBoxes.eq(4), { rotate: 23 }, '-=0.3');

    // Avatars
    function moveAvatar() {
      let tl = gsap.timeline();
      tl.fromTo(
        avatar,
        { opacity: 0, scale: 0.5 },
        { ...fastReveal, scale: 1, xPercent: -90, duration: 0.2 }
      )
        .to(avatar, {
          duration: 0.001,
          onStart: () => avatar.css('z-index', 1),
          onReverseComplete: () => avatar.css('z-index', 1),
          onComplete: () => avatar.css('z-index', 5),
        })
        .to(avatar, { xPercent: 0 });

      return tl;
    }

    function createAvatarAnimation() {
      let avatarTl = gsap.timeline({
        onReverseComplete: updateAvatar,
      });

      avatarTl.add(moveAvatar());

      return avatarTl; // Return the timeline
    }

    function updateAvatar() {
      let avatars = $('.cache_avatar img'); // Assuming avatar is not defined, this directly targets elements with class 'image'
      avatars.hide();

      // Increment the activeIndex and wrap it around if it exceeds the number of avatars - 1
      activeIndex = (activeIndex + 1) % avatars.length;

      // Show the avatar at the new activeIndex
      avatars.eq(activeIndex).show();
    }

    let avatarTl = gsap.timeline({ paused: true });
    avatarTl.add(createAvatarAnimation());

    // Hover functionality
    $('.work_item-block.cache').hover(
      function () {
        // Hover in
        introTl.play();
        avatarTl.play();
      },
      function () {
        // Hover out
        introTl.reverse();
        avatarTl.reverse();
      }
    );
  }

  tiny();
  modular();
  DocuSign();
  vsco();
  Firstround();
  together();
  polywork();
  atoms();
  modernLife();
  cache();

  // #endregion

  // #region Clients

  function loopPlaces(parent) {
    gsap.registerPlugin(TextPlugin);

    const springs = [
      'Prague',
      'New York',
      'San Francisco',
      'London',
      'Chicago',
      'Vienna',
      'Amsterdam',
      'Los Angeles',
    ];
    let currentSpringIndex = 0; // Initialize an index to track the current spring

    const $parentElement = $(parent);
    const $topElement = $(parent).find('#reveal-top');
    const $botElement = $(parent).find('#reveal-bot');

    function animateElements(parent) {
      // Use the current index to select the spring
      const currentSpring = springs[currentSpringIndex];

      // Assign the current spring to spanElement
      $botElement.text(currentSpring);

      // Get the width of the spanElement and set it to parentElement
      const spanWidth = $botElement.width();
      gsap.to($parentElement, { width: `${spanWidth}px` });

      // Animate both elements
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(resetAndLoop, 2000); // Delay before looping
        },
      });

      tl.to($botElement, { y: '-100%', duration: 0.5 }).to(
        $topElement,
        {
          y: '-100%',
          duration: 0.5,
        },
        '<'
      );

      function resetAndLoop() {
        // Move elements back to initial position without transition
        gsap.set([$botElement, $topElement], { y: '0%' });

        // Swap text
        $topElement.text(currentSpring);
        $botElement.text(''); // Prepare for next text

        // Increment the index or reset if at the end of the array
        currentSpringIndex = (currentSpringIndex + 1) % springs.length;

        // Loop the animation
        animateElements();
      }
    }

    animateElements(parent); // Start the animation loop
  }

  $('.section_head-text-reveal').each(function () {
    loopPlaces($(this));
  });

  // #endregion

  // #region Testimonials
  function updateQuote(swiper) {
    let { activeIndex, slides } = swiper;
    let activeItem = slides[activeIndex];

    let quoteText = $(activeItem).attr('data-quote');
    let nameText = $(activeItem).attr('data-name');
    let roleText = $(activeItem).attr('data-role');

    let quoteEl = $('[quote-el]');
    let quoteInner = $('[quote-text]');
    let nameEl = $('[quote-name]');
    let roleEl = $('[quote-role]');

    gsap.to(quoteEl, {
      duration: 0.3,
      yPercent: 10,
      opacity: 0,
      onComplete: () => {
        gsap.set(quoteInner, {
          text: {
            value: quoteText,
          },
          onComplete: () => {
            gsap.to(quoteEl, {
              height: () => {
                if ($(window).width() < 992) {
                  return quoteInner.outerHeight();
                }
              },
              yPercent: 0,
              opacity: 1,
              duration: 0.3,
            });
          },
        });
      },
    });

    gsap.to(nameEl, {
      duration: 1,
      scrambleText: {
        text: nameText,
        chars: 'jompaWB!^',
        delimiter: ' ',
      },
    });
    gsap.to(roleEl, {
      duration: 1,
      scrambleText: {
        text: roleText,
        chars: 'jompaWB!^',
      },
    });

    $(window).on('resize', function () {
      quoteEl.attr('style', '');
      swiper.slideTo(3);
    });
  }

  const swiper = new Swiper('.testimonials_slider', {
    // Optional parameters
    on: {
      init: function () {
        updateQuote(this);
      },
    },
    observer: true,
    slideToClickedSlide: true,
    breakpoints: {
      0: {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 24,
        initialSlide: 0,
        threshold: 10,
        freeMode: {
          enabled: false,
        },
      },
      992: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 3,
        threshold: 40,
        freeMode: {
          enabled: true,
          sticky: true,
        },
        mousewheel: {
          enabled: true,
          thresholdDelta: 20,
        },
      },
    },
  });

  let debounceTimer;
  swiper.on('slideChange', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      updateQuote(this);
    }, 300);
  });

  console.log(swiper);

  // #endregion

  // #region Duo
  // ---- Draging Paragraph
  function setupDraggers(draggers) {
    draggers.forEach((dragger) => {
      const dragInput = $(dragger.element + ' ._wf-spacer-input');
      const valueInput = dragInput; // Assuming the value input is the same as drag input
      const dragHandle = $(dragger.element + ' ._wf-draggable');
      let isDragging = false;
      const minValue = parseFloat(dragger.minVal); // Minimum allowed value
      const maxValue = parseFloat(dragger.maxVal); // Maximum allowed value
      const step = parseFloat(dragger.step); // Incremental step for decimal places

      dragHandle.on('mousedown', function (event) {
        isDragging = true;
        const startX = event.clientX;
        const startValue = parseFloat(valueInput.val()) || 0;

        $(document).on('mousemove', function (event) {
          if (isDragging) {
            const offsetX = event.clientX - startX;
            let newValue = startValue + offsetX * step;

            // Apply the minimum and maximum value constraints
            newValue = Math.max(minValue, Math.min(maxValue, newValue));

            // Round to one decimal place
            newValue = parseFloat(newValue.toFixed(1));

            valueInput.val(newValue);

            // Update the CSS variable using the function provided
            if (dragger.updateVariable) {
              dragger.updateVariable(newValue);
            }
          }
        });

        $(document).on('mouseup', function () {
          isDragging = false;
          $(document).off('mousemove');
          $(document).off('mouseup');
        });
      });
    });
  }

  // Example usage:
  const draggers = [
    {
      element: '.ui-divider',
      minVal: '0',
      maxVal: '30',
      step: '0.1',
      updateVariable: (newValue) => {
        document.documentElement.style.setProperty('--duo-padding', newValue + 'vw');
      },
    },
    {
      element: '.ui-opacity',
      minVal: '0',
      maxVal: '100',
      step: '1',
      updateVariable: (newValue) => {
        document.documentElement.style.setProperty('--duo-opacity', newValue / 100);
      },
    },
  ];

  setupDraggers(draggers);
  // #endregion
});
