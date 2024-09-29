$(document).ready(function () {
  // Ensure GSAP is loaded
  gsap.registerPlugin(MotionPathPlugin);

  // #region Utility Classes

  function toggleWFLabel(label, state) {
    let editClass = 'edit';
    if (state) {
      label.addClass(editClass);
    } else {
      label.removeClass(editClass);
    }
  }

  function handleLabelClick(label, callback) {
    $(label).on('click', function () {
      toggleWFLabel(label, false);
      callback();
    });
  }

  function darkMenu() {
    $('[dark-menu-section]').each(function () {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(this),
          start: 'top 36px',
          end: 'bottom 36px',
          onEnter: () => {
            let nav = $('.hero_top');

            if (!nav.hasClass('cc-dark')) {
              nav.addClass('cc-dark');
            }
          },
          onEnterBack: () => {
            let nav = $('.hero_top');

            if (!nav.hasClass('cc-dark')) {
              nav.addClass('cc-dark');
            }
          },
          onLeaveBack: () => {
            let nav = $('.hero_top');
            nav.removeClass('cc-dark');
          },
          onLeave: () => {
            let nav = $('.hero_top');
            nav.removeClass('cc-dark');
          },
        },
      });
    });
  }
  darkMenu();

  // #endregion

  // #region Button CTA
  // Get the element
  // Get all the buttons
  const buttons = document.querySelectorAll('.btn_wrap'); // Replace '.button-selector' with your actual class or selector that matches all buttons

  // Helper function to interpolate values
  function interpolate(start, end, ratio) {
    return start + (end - start) * ratio;
  }

  // Animation function for rotation
  function animateRotation(element, duration, startTime) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const ratio = elapsedTime / duration;

    let rotation;
    if (ratio < 0.3282275711) {
      rotation = interpolate(0, 0, ratio / 0.3282275711);
    } else if (ratio < 0.5) {
      rotation = interpolate(0, 180, (ratio - 0.3282275711) / (0.5 - 0.3282275711));
    } else if (ratio < 0.8282275711) {
      rotation = 180;
    } else if (ratio <= 1) {
      rotation = interpolate(180, 360, (ratio - 0.8282275711) / (1 - 0.8282275711));
    } else {
      rotation = 360;
      startTime = currentTime; // Reset startTime for looping
    }

    element.style.setProperty('--r2', `${rotation}deg`);

    if (ratio <= 1) {
      requestAnimationFrame(() => animateRotation(element, duration, startTime));
    } else {
      requestAnimationFrame(() => animateRotation(element, duration, Date.now()));
    }
  }

  // Animation function for horizontal movement
  function animateMovement(element, duration, startTime) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const ratio = elapsedTime / duration;

    let position;
    if (ratio < 0.3282275711) {
      position = interpolate(10, 90, ratio / 0.3282275711);
    } else if (ratio < 0.5) {
      position = 90;
    } else if (ratio < 0.8282275711) {
      position = interpolate(90, 10, (ratio - 0.5) / (0.8282275711 - 0.5));
    } else if (ratio <= 1) {
      position = 10;
    } else {
      position = 10;
      startTime = currentTime; // Reset startTime for looping
    }

    element.style.setProperty('--x', `${position}%`);

    if (ratio <= 1) {
      requestAnimationFrame(() => animateMovement(element, duration, startTime));
    } else {
      requestAnimationFrame(() => animateMovement(element, duration, Date.now()));
    }
  }

  // Start the animations for each button
  buttons.forEach((button) => {
    animateRotation(button, 3000, Date.now());
    animateMovement(button, 3000, Date.now());
  });

  // #endregion

  // #region Form
  function logSubmit(event) {
    $('.sidebar_trigger').trigger('click');
    gsap.fromTo($('.sidebar_success'), { y: '-8rem' }, { y: '0', display: 'flex' });

    setTimeout(() => {
      $('.sidebar_success').fadeOut();
    }, 8000);
  }

  $('select').niceSelect();

  $('.nice-select li').on('click', function () {
    $('.nice-select .current').css('color', 'white');
  });

  const form = document.getElementById('wf-form-get-in-touch-form');
  form.addEventListener('submit', logSubmit);

  let formInputs = $('.form_input');

  formInputs.hover(
    function () {
      $(this).siblings().addClass('active');
    },
    function () {
      if (!$(this).is(':focus')) {
        $(this).siblings().removeClass('active');
      }
    }
  );

  formInputs.on('focus', function () {
    $(this).siblings().addClass('active');
  });
  formInputs.on('blur', function () {
    $(this).siblings().removeClass('active');
  });

  function copyEmails() {
    let timeOut;

    // Click
    $('.sidebar_email').click(function () {
      var $url = $(this).text();
      let ogText = $('.sidebar_label').text();
      copyToClipboard($url);

      clearTimeout(timeOut);
      $('.sidebar_label').text('Copied to clipboard');
      $('.sidebar_label').parent('.opacity-60').css('opacity', '1');
      $('.sidebar_label').css('color', '#0084ff');
      timeOut = setTimeout(() => {
        $('.sidebar_label').text(ogText);
        $('.sidebar_label').parent('.opacity-60').css('opacity', '0.6');
        $('.sidebar_label').css('color', 'inherit');
      }, 2000);
    });

    // Click
    $('#copyEmailFooter').click(function () {
      var $url = 'team@divblockers.com';
      copyToClipboard($url);

      clearTimeout(timeOut);
      $(this).find('.meta-text').text('Copied to clipboard');
      timeOut = setTimeout(() => {
        $(this).find('.meta-text').text('Email');
      }, 2000);
    });
  }

  // Function to handle copying text to clipboard
  function copyToClipboard(text) {
    var $temp = $('<textarea>');
    $temp.val(text).css({
      position: 'absolute',
      left: '-9999px',
      top: '0',
      readonly: true,
    });

    $('body').append($temp);
    $temp.select();
    document.execCommand('copy');
    $temp.remove();
  }

  copyEmails();

  // #endregion

  // #region Loader

  // Finish Reveal
  function revealSite() {
    let tl = gsap.timeline();

    tl.fromTo(
      '.hero_heading',
      { y: '10%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.3, ease: 'power1.inOut' },
      '+=0.2'
    );
    tl.to('[data-hide-default]', { opacity: 1 });
    tl.set('.preloader', { display: 'none' });
    tl.set(['html', 'body'], { height: 'auto', overflow: 'visible' });
    tl;

    return tl;
  }
  function initLoader() {
    gsap.registerPlugin(SplitText, CustomEase);
    CustomEase.create('primary', '0.57, 0, 0.08, 1');
    gsap.defaults({ ease: 'primary' });

    // Default
    gsap.set('.preloader', { display: 'flex' });
    gsap.set(['html', 'body'], { height: '100vh', overflow: 'hidden' });
    gsap.set('[data-hide-default]', { opacity: 0 });

    // Moving images
    function animatePreloaderImages() {
      // Select all elements with the class .preloader_img
      const $images = $('.preloader_img').not('[data-no-move]');

      // Iterate over each image
      $images.each(function () {
        // Generate a random distance
        const distance = Math.random() * 10 + 50;

        // Create the animation for the current image
        gsap.to($(this), {
          y: `-${distance}vh`,
          duration: 10, // duration of the animation in seconds
          ease: 'linear',
        });
      });
    }

    // Text Replacement
    let currentIndex = 0;

    function animateText() {
      let words = ['We are', 'Webflow', 'Studio'];

      if (currentIndex < words.length) {
        const textElement = document.querySelector('.preloader_text');
        textElement.textContent = words[currentIndex];

        if (currentIndex === 0) {
          moveImages(-1);
        }
        let tl8 = gsap.timeline({
          delay: 0.5,
          onComplete: () => {
            // Increment to next word or loop to start
            currentIndex = currentIndex + 1;
            animateText(); // Restart animation with new word
          },
        });

        // Initial animation from 100% bottom to 0%
        tl8.fromTo(
          textElement,
          {
            y: '10%',
            opacity: 0,
          },
          {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            ease: 'power2.inOut',
          }
        );

        if (currentIndex < words.length - 1) {
          tl8.to(
            textElement,
            {
              y: '-10%',
              opacity: 0,
              duration: 0.4,
              ease: 'power2.inOut',
              onStart: () => {
                moveImages(currentIndex);
              },
            },
            '+=0.2'
          );
        }
      } else {
        setTimeout(() => {
          moveImages(currentIndex + 2);
        }, 300);
        setTimeout(() => {
          let tl = gsap.timeline();
          tl.to('.preloader_text', { y: '10%', opacity: 0, duration: 0.3, ease: 'power1.inOut' });
          tl.add(revealSite());
        }, 600);
      }
    }

    function moveImages(index) {
      gsap.to('.preloader_col:first-child', {
        y: `-${(index + 1) * 100}vh`,
        duration: 2,
      });
      gsap.to('.preloader_col:last-child', {
        y: `-${(index + 1) * 100}vh`,
        duration: 2,
      });
    }

    // Init
    animateText();
    animatePreloaderImages();
  }

  // Scroll Fix
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; // Disable browser's automatic scroll restoration
  }

  $(window).on('unload', function () {
    $('body').css('opacity', '0');
    $(window).scrollTop(0);
  });

  // Init
  let loaderState = sessionStorage.getItem('loaderState') === 'true';
  window.scrollTo(0, 0); // Set scroll position to top after page load
  $('.page-wrapper').css('opacity', '1');
  if (!loaderState) {
    initLoader();
    sessionStorage.setItem('loaderState', 'true');
  } else {
    revealSite();
  }

  // #endregion

  // #region ScrollDisabler
  $(document).ready(function () {
    var $body = $(document.body);
    var scrollPosition = 0;
    var isScrollDisabled = false;
    var currentBreakpoint = '';

    function toggleScroll() {
      if (isScrollDisabled) {
        enableScroll();
      } else {
        disableScroll();
      }
    }

    function disableScroll() {
      var oldWidth = $body.innerWidth();
      scrollPosition = window.pageYOffset;
      $body.css({
        overflow: 'hidden',
        position: 'fixed',
        top: `-${scrollPosition}px`,
        width: oldWidth,
      });
      isScrollDisabled = true;
    }

    function enableScroll() {
      $body.css({
        overflow: '',
        position: '',
        top: '',
        width: '',
      });
      $(window).scrollTop(scrollPosition);
      isScrollDisabled = false;
    }

    // Click Event
    $('[scroll="toggle"]').on('click', toggleScroll);

    // Run on resize
    const breakpoints = [991, 767, 479];
    let lastWidth = window.innerWidth;

    function handleBreakpoint(breakpoint) {
      if (isScrollDisabled) {
        enableScroll();
      }
    }

    // Function to check breakpoints on window resize
    function checkBreakpoints() {
      const currentWidth = window.innerWidth;

      breakpoints.forEach((breakpoint) => {
        if (
          (lastWidth <= breakpoint && currentWidth > breakpoint) ||
          (lastWidth >= breakpoint && currentWidth < breakpoint)
        ) {
          handleBreakpoint(breakpoint);
        }
      });

      // Update lastWidth for the next call
      lastWidth = currentWidth;
    }

    // Event listener for window resize
    window.addEventListener('resize', checkBreakpoints);
  });
  // #endregion

  // #region Sticky CTA

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    // large
    '(min-width: 768px)': function () {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: $('.section_work'),
          start: '310 bottom',
          toggleActions: 'play none none reverse',
        },
      });

      tl.set($('.btn_wrap.is-nav'), { display: 'block' });
      tl.set([$('.hero_col.full,.hero_team-meta')], { pointerEvents: 'none' });
      tl.set($('.hero_team-meta'), { display: 'none' });
      tl.fromTo($('.btn_wrap.is-nav'), { opacity: 0 }, { opacity: 1 });
    },
  });

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
          visualElement,
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
        start: '100px bottom',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(heroHeading, {
      y: () => {
        return heroPar.outerHeight() / 2;
      },
      keyframes: {
        '20%': { opacity: 0.15, filter: 'blur(10px)' },
        '90%': { opacity: 0 },
      },
    });

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

  function heroInfo() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: $('.section_work'),
        start: '20px bottom',
        end: '40px bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(['.hero_btn-box', '.hero_notification'], { opacity: 0 });
  }

  // ---- Label Color Change
  function titleColor() {
    let label = $('.hero-wrap_heading').find('._wf-ui_label');
    let title = $('.hero-wrap_heading h1');

    $('._wf-ui-colors-block').on('click', function () {
      let color = $(this).css('background-color');
      toggleWFLabel(label, true);
      title.css('color', color);
      $('html').css('--wf-ui--lines', color);
    });

    handleLabelClick(label, () => {
      title.css('color', 'inherit');
      $('html').css('--wf-ui--lines', 'var(--color--main)');
    });
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
  heroInfo();
  titleColor();
  heroTime();
  updateNavBrand();
  teamTips();
  animateHeroLines();

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

  // #region Rotatin Words
  const locations = [
    'Prague',
    'New York',
    'San Francisco',
    'London',
    'Chicago',
    'Vienna',
    'Amsterdam',
    'Los Angeles',
  ];

  const hobbies = [
    'playing Playstation',
    'heavy lifting',
    'bing-watching',
    'snowboarding',
    'cutting boxes in VR',
    'thai boxing',
    'road cycling',
    'beachballing',
  ];

  function loopPlaces(parent, springs) {
    gsap.registerPlugin(TextPlugin);

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

  loopPlaces($('#clientsLoc'), locations);
  loopPlaces($('#hobbies'), hobbies);

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
                return quoteInner.outerHeight();
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
        slidesPerView: 1,
        spaceBetween: 8,
        threshold: 10,
        freeMode: {
          enabled: false,
        },
      },
      992: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
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
    on: {
      init: function () {
        const width = window.innerWidth;
        if (width > 991) {
          this.slideTo(3); // Use `this` to reference the swiper instance
        }
        updateQuote(this);
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

  // #endregion

  // #region Duo
  // ---- Draging & Input
  function setupDraggers(draggers) {
    draggers.forEach((dragger) => {
      // Els
      const dragInput = $(dragger.element + ' ._wf-spacer-input');
      const valueInput = dragInput;
      const dragHandle = $(dragger.element + ' ._wf-draggable');

      // Vals
      const defaultValue = dragInput.val();
      const minValue = parseFloat(dragger.minVal); // Minimum allowed value
      const maxValue = parseFloat(dragger.maxVal); // Maximum allowed value

      // MISC
      const step = parseFloat(dragger.step); // Incremental step for decimal places
      const { type } = dragger;

      // Flag
      let isDragging = false;

      // Label
      let label = $(dragger.element).find('._wf-ui_label');

      handleLabelClick(label, () => {
        dragInput.val(defaultValue);
        dragger.updateVariable(defaultValue);
      });

      // Function
      function updateValue(value) {
        dragger.updateVariable(value);

        if (label) {
          toggleWFLabel(label, true);
        }
      }

      // Update Value
      if (type === 'drag') {
        dragHandle.on('mousedown touchstart', function (event) {
          isDragging = true;
          const startX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
          const startValue = parseFloat(valueInput.val()) || 0;

          $(document).on('mousemove touchmove', function (event) {
            if (isDragging) {
              const clientX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
              const offsetX = clientX - startX;
              let newValue = startValue + offsetX * step;

              // Apply the minimum and maximum value constraints
              newValue = Math.max(minValue, Math.min(maxValue, newValue));

              // Round to one decimal place
              newValue = parseFloat(newValue.toFixed(1));

              valueInput.val(newValue);

              // Update the CSS variable using the function provided
              if (dragger.updateVariable) {
                updateValue(newValue);
              }
            }
          });

          $(document).on('mouseup touchend', function () {
            isDragging = false;
            $(document).off('mousemove touchmove');
            $(document).off('mouseup touchend');
          });

          // Prevent default touch actions to avoid scrolling issues
          event.preventDefault();
        });
      } else if (type === 'input') {
        dragInput.on('keydown', function (event) {
          let currentValue = parseInt($(this).val()) || 0; // Get current value or default to 0 if not a number
          if (event.which === 38 || event.which === 104) {
            // Arrow up or numpad 8
            $(this)
              .val(currentValue + 1)
              .trigger('change'); // Increment, set, and trigger change
          } else if (event.which === 40 || event.which === 98) {
            // Arrow down or numpad 2
            $(this)
              .val(currentValue - 1)
              .trigger('change'); // Decrement, set, and trigger change
          }
        });

        dragInput.on('change', function () {
          let newValue = $(this).val();
          updateValue(newValue);
        });
      }
    });
  }

  // Example usage:
  const draggers = [
    {
      element: '.ui-divider',
      type: 'drag',
      minVal: '0',
      maxVal: '40',
      step: '0.1',
      updateVariable: (newValue) => {
        document.documentElement.style.setProperty('--duo-padding', newValue + 'vw');
      },
    },
    {
      element: '.ui-opacity',
      type: 'input',
      minVal: '0',
      maxVal: '100',
      step: '1',
      updateVariable: (newValue) => {
        document.documentElement.style.setProperty('--duo-opacity', newValue / 100);
      },
    },
  ];

  // ---- Display Option
  let block = $('.duo_person._2');
  let baseClass = block.attr('class');
  let displayBoxes = $('.ui-display ._wf-box_inner');
  let label = $('.ui-display ._wf-ui_label');

  // Functions
  function toggleActiveBox(index) {
    displayBoxes.removeClass('active');
    displayBoxes.eq(index).addClass('active');
  }

  // Blocks
  $('.ui-display ._wf-box_inner').on('click', function () {
    let type = $(this).attr('data-display');

    // Toggle States
    block.attr('class', baseClass).addClass(type);
    if (type === 'hidden') {
      $('.duo_person._1').addClass(type);
    } else {
      $('.duo_person._1').removeClass('hidden');
    }

    // Active state
    toggleActiveBox($(this).index());

    toggleWFLabel(label, true);
  });

  // Label Clicks
  handleLabelClick(label, () => {
    block.attr('class', baseClass);
    $('.duo_person._1').removeClass('hidden');
    toggleActiveBox(0);
  });

  // Label

  setupDraggers(draggers);
  // #endregion

  // #region Easters

  // Divblockers UI
  $('.divblockers').each(function () {
    let tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'power4.out',
        duration: 0.4,
      },
    });
    let lines = $('[divblockers-wrap]').find('.about_list-line');
    let label = $('[divblockers-wrap]').find('.div-block_label');

    tl.to(label, { yPercent: -100 });
    tl.to(lines, { scale: 1 }, '<');

    $(this).hover(
      () => {
        tl.play();
      },
      () => {
        tl.reverse();
      }
    );
  });

  // Pixels Off
  $('._4-pixels-off').each(function () {
    $(this).on('mouseenter', function () {
      let tl = gsap.timeline();
      tl.to($(this), { y: '4px', ease: 'power2.out', duration: 0.3 });
      tl.to($(this), { rotate: '6deg', ease: 'bounce.out' }, '-=0.1');
    });
  });

  // No Code Icons
  $('.no-code_trigger').each(function () {
    let timelines = [];

    // Select all elements with the class '.no-code_icon'
    const icons = document.querySelectorAll('.no-code_icon');

    // Function to create the animation
    function animateIcon(icon, index) {
      // Generate random values for the motion path
      const startX = gsap.utils.random(-50, 50); // Slight random curve control
      const randomX = gsap.utils.random(-50, 50); // Random horizontal spread

      gsap.set(icon, { opacity: 0, x: startX });

      // Timeline with repeat -1 for looping
      const tl = gsap.timeline({
        delay: 0.625 * index,
        repeat: -1,
        repeatDelay: 0.5 * icons.length,
        paused: true,
      });

      // Add animation to the timeline
      tl.to(icon, {
        motionPath: {
          path: [
            { x: startX, y: 0 }, // Start at the bottom0.
            { x: randomX, y: -100 }, // End at the top with a spread
          ],
          curviness: 0.5, // Higher curviness for more defined arc
          autoRotate: false, // Prevent rotation along the path
        },
        duration: 2.5, // Duration of each animation
        keyframes: {
          '0%': {
            opacity: 0,
          },
          '25%': {
            opacity: 1,
          },
          '50%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
          },
        },
        opacity: 0, // Fade out at the end
        ease: 'power1.out', // Ease for a smoother effect
        onComplete: () => {
          // Reset to original position and opacity after animation
          gsap.set(icon, { x: 0, y: 0, opacity: 0 });
        },
      });

      return tl;
    }

    $(this).hover(
      () => {
        // Initialize and store timelines for each icon
        // Convert NodeList to an array and shuffle it for random order
        const shuffledIcons = gsap.utils.shuffle([...icons]);

        timelines = shuffledIcons.map((icon, index) => {
          const tl = animateIcon(icon, index);
          tl.play();
          return tl;
        });
      },
      () => {
        // Kill all timelines and clear the array
        timelines.forEach((tl, index) => {
          tl.kill();
          gsap.set(icons, { clearProps: 'all' }); // Clear all properties set by GSAP
        });
        timelines = [];
      }
    );
  });

  // #endregion
});
