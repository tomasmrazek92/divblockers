$(document).ready(function () {
  // #region Loader
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
    { scale: 0.25, yPercent: -63, xPercent: -30, text: 'we-are', duration: 0.5, ease: 'expo.out' },
    '+=0.3'
  );
  loader.fromTo(logoLine.eq(0), { xPercent: 100 }, { xPercent: 0, opacity: 1, duration: 0.5 }, '<');
  loader.addLabel('Show Label');
  loader.fromTo(
    logoLine.eq(1),
    { xPercent: -100 },
    { xPercent: 0, opacity: 1, duration: 0.5 },
    '<'
  );
  loader.fromTo(logoLine.eq(2), { yPercent: 100 }, { yPercent: 0, opacity: 1, duration: 0.5 }, '<');
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

  // #endregion

  // ---- Label Color Change
  $('._wf-ui-colors-block').on('click', function () {
    let color = $(this).css('background-color');
    let title = $('.hero-title_b p').css('color', color);
    $(this).closest('._wf-ui').find('._wf-ui_label').addClass('edit');
  });

  // --- Update the label
  let x = 0;
  $('.nav_brand')
    .find('.div-block_label')
    .on('click', function () {
      let texts = [
        'embed-typers',
        'margin-draggers',
        'cms-editors',
        'link-creators',
        'superheroes',
        'friends',
        'running out of ideas',
        'check the projects',
        'stop now',
        'for real?',
        'one more',
        'maybe one more',
        'div-blockers',
      ];
      x = (x + 1) % texts.length; // Increment x, and reset if it equals texts length
      $(this).find('.div-block_text').text(texts[x]);
    });

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

    // Update initial font size on window resize
    $(window).on('resize', function () {
      initialFontSize = parseInt($textarea.css('font-size'), 10); // Update the initial font size
      maxHeight = $textarea.height(); // Update the max height of the textarea
      updateFontSize(); // Update the font size immediately on resize
    });
  });

  // ---- Avatars Change
  function startSequence() {
    var bgImagesFirst = [
      'https://uploads-ssl.webflow.com/651495e5c26d21c7cb5e0e2f/65251dd31f84ff3af2031f67_earth.png',
      'https://uploads-ssl.webflow.com/651495e5c26d21c7cb5e0e2f/65251dd31f84ff3af2031f69_orb.jpg',
    ];
    var bgImagesLast = [
      'https://uploads-ssl.webflow.com/651495e5c26d21c7cb5e0e2f/65253ca706b52a23cf954c44_braiins-mobile.jpg',
      'https://uploads-ssl.webflow.com/651495e5c26d21c7cb5e0e2f/65251dd31f84ff3af2031f69_orb.jpg',
    ];
    var $this = $(this);
    var originalBg = $this.css('background-image');
    $this.data('originalBg', originalBg); // Store the original background

    var images = $this.hasClass('is-first') ? bgImagesFirst : bgImagesLast;
    var currentIndex = 1; // Start from the second image
    var intervalId;

    intervalId = setInterval(function () {
      $this.css('background-image', `url('${images[currentIndex]}')`);
      currentIndex = (currentIndex + 1) % images.length;
    }, 1000);

    $this.data('intervalId', intervalId);
  }

  function stopSequence() {
    var intervalId = $(this).data('intervalId');
    clearInterval(intervalId);
    var originalBg = $(this).data('originalBg'); // Get the original background
    $(this).css('background-image', originalBg); // Reset to the original background
  }

  $('.person-avatar').hover(startSequence, stopSequence);

  // ---- Draging Paragraph
  const dragInput = $('._wf-spacer-input');
  const valueInput = dragInput;
  const dragHandle = $('._wf-draggable');
  let isDragging = false;
  const minValue = 0; // Minimum allowed value
  const maxValue = 5; // Maximum allowed value
  const step = 0.1; // Incremental step for decimal places

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

        // Update the CSS variable
        document.documentElement.style.setProperty('--hero-par-divider', newValue + 'rem');
      }
    });

    $(document).on('mouseup', function () {
      isDragging = false;
      $(document).off('mousemove');
      $(document).off('mouseup');
    });
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
});
