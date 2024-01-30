/* global JotForm, $, $$, $A, $H, window, document, navigator, console, XMLHttpRequest, ActiveXObject, Ajax */
'use strict';

if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
  };
}

var FormTranslation = {
  languages: {
    'English (US)': 'en',
    'English (UK)': 'en-UK',
    'Español': 'es',
    'Français': 'fr',
    'Italiano': 'it',
    'Português': 'pt',
    'Deutsch': 'de',
    'Türkçe': 'tr',
    'Català': 'ca',
    'Nederlands': 'nl',
    'Svenska': 'sv',
    'Magyar': 'hu',
    'Norsk': 'no',
    'Dansk': 'da',
    'Română': 'ro',
    'Finnish': 'fi',
    'Polski': 'pl',
    'Russian': 'ru',
    'Chinese': 'zh',
    'Afrikaans': 'af',
    'Albanian': 'sq',
    'Amharic': 'am',
    'Arabic‬‎': 'ar',
    'Armenian': 'hy',
    'Azerbaijani': 'az',
    'Euskara': 'eu',
    'Belarusian': 'be',
    'Bengali': 'bn',
    'Bihari': 'bh',
    'Bosnian': 'bs',
    'Breton': 'br',
    'Bulgarian': 'bg',
    'Chinese (Simplified Han)': 'zh-CN',
    'Chinese (Traditional Han)': 'zh-TW',
    'Corsican': 'co',
    'Croatian': 'hr',
    'Czech': 'cs',
    'English (Australia)': 'en-AU',
    'English (Canada)': 'en-CA',
    'English (New Zealand)': 'en-NZ',
    'English (South Africa)': 'en-ZA',
    'Esperanto': 'eo',
    'Estonian': 'et',
    'Faroese': 'fo',
    'Filipino': 'fil',
    'French (Canada)': 'fr-CA',
    'French (France)': 'fr-FR',
    'French (Switzerland)': 'fr-CH',
    'Galician': 'gl',
    'Georgian': 'ka',
    'German (Austria)': 'de-AT',
    'German (Germany)': 'de-DE',
    'German (Switzerland)': 'de-CH',
    'Greek': 'el',
    'Guarani': 'gn',
    'Gujarati': 'gu',
    'Haitian Creole': 'ht',
    'Hausa': 'ha',
    'Hawaiian': 'haw',
    'Hebrew': 'he',
    'Hindi': 'hi',
    'Icelandic': 'is',
    'Indonesian': 'id',
    'Interlingua': 'ia',
    'Irish': 'ga',
    'Italian (Switzerland)': 'it-CH',
    'Japanese': 'ja',
    'Javanese': 'jw',
    'Kannada': 'kn',
    'Kazakh': 'kk',
    'Khmer': 'km',
    'Kirghiz': 'ky',
    'Korean': 'ko',
    'Kurdish': 'ku',
    'Lao': 'lo',
    'Latin': 'la',
    'Latvian': 'lv',
    'Lingala': 'ln',
    'Lithuanian': 'lt',
    'Macedonian': 'mk',
    'Malay': 'ms',
    'Malayalam': 'ml',
    'Maltese': 'mt',
    'Marathi': 'mr',
    'Moldavian': 'mo',
    'Mongolian': 'mn',
    'Nepali': 'ne',
    'Norwegian Bokmål': 'nb',
    'Norwegian Nynorsk': 'nn',
    'Occitan': 'oc',
    'Oriya': 'or',
    'Oromo': 'om',
    'Pashto': 'ps',
    'Persian': 'fa',
    'Portuguese (Brazil)': 'pt-BR',
    'Portuguese (Portugal)': 'pt-PT',
    'Punjabi': 'pa',
    'Quechua': 'qu',
    'Romansh': 'rm',
    'Scottish Gaelic': 'gd',
    'Serbian': 'sr',
    'Serbo-Croatian': 'sh',
    'Shona': 'sn',
    'Sindhi': 'sd',
    'Sinhala': 'si',
    'Slovak': 'sk',
    'Slovenian': 'sl',
    'Somali': 'so',
    'Southern Sotho': 'st',
    'Spanish (Latin America)': 'es-419',
    'Sundanese': 'su',
    'Swahili': 'sw',
    'Tajik': 'tg',
    'Tamil': 'ta',
    'Tatar': 'tt',
    'Telugu': 'te',
    'Thai': 'th',
    'Tigrinya': 'ti',
    'Tonga': 'to',
    'Turkmen': 'tk',
    'Twi': 'tw',
    'Uighur': 'ug',
    'Ukrainian': 'uk',
    'Urdu': 'ur',
    'Uzbek': 'uz',
    'Vietnamese': 'vi',
    'Welsh (Cymraeg)': 'cy',
    'Western Frisian': 'fy',
    'Xhosa': 'xh',
    'Yiddish': 'yi',
    'Yoruba': 'yo',
    'Zulu': 'zu',
    'en': 'English (US)',
    'en-UK': 'English (UK)',
    'es': 'Español',
    'fr': 'Français',
    'it': 'Italiano',
    'pt': 'Português',
    'de': 'Deutsch',
    'tr': 'Türkçe',
    'ca': 'Català',
    'nl': 'Nederlands',
    'sv': 'Svenska',
    'hu': 'Magyar',
    'no': 'Norsk',
    'da': 'Dansk',
    'ro': 'Română',
    'fi': 'Finnish',
    'pl': 'Polski',
    'ru': 'Russian',
    'zh': 'Chinese',
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'am': 'Amharic',
    'ar': 'Arabic‬‎',
    'hy': 'Armenian',
    'az': 'Azerbaijani',
    'eu': 'Euskara',
    'be': 'Belarusian',
    'bn': 'Bengali',
    'bh': 'Bihari',
    'bs': 'Bosnian',
    'br': 'Breton',
    'bg': 'Bulgarian',
    'zh-CN': 'Chinese (Simplified Han)',
    'zh-TW': 'Chinese (Traditional Han)',
    'co': 'Corsican',
    'hr': 'Croatian',
    'cs': 'Czech',
    'en-AU': 'English (Australia)',
    'en-CA': 'English (Canada)',
    'en-NZ': 'English (New Zealand)',
    'en-ZA': 'English (South Africa)',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'fo': 'Faroese',
    'fil': 'Filipino',
    'fr-CA': 'French (Canada)',
    'fr-FR': 'French (France)',
    'fr-CH': 'French (Switzerland)',
    'gl': 'Galician',
    'ka': 'Georgian',
    'de-AT': 'German (Austria)',
    'de-DE': 'German (Germany)',
    'de-CH': 'German (Switzerland)',
    'el': 'Greek',
    'gn': 'Guarani',
    'gu': 'Gujarati',
    'ht': 'Haitian Creole',
    'ha': 'Hausa',
    'haw': 'Hawaiian',
    'he': 'Hebrew',
    'hi': 'Hindi',
    'is': 'Icelandic',
    'id': 'Indonesian',
    'ia': 'Interlingua',
    'ga': 'Irish',
    'it-CH': 'Italian (Switzerland)',
    'ja': 'Japanese',
    'jw': 'Javanese',
    'kn': 'Kannada',
    'kk': 'Kazakh',
    'km': 'Khmer',
    'ky': 'Kirghiz',
    'ko': 'Korean',
    'ku': 'Kurdish',
    'lo': 'Lao',
    'la': 'Latin',
    'lv': 'Latvian',
    'ln': 'Lingala',
    'lt': 'Lithuanian',
    'mk': 'Macedonian',
    'ms': 'Malay',
    'ml': 'Malayalam',
    'mt': 'Maltese',
    'mr': 'Marathi',
    'mo': 'Moldavian',
    'mn': 'Mongolian',
    'ne': 'Nepali',
    'nb': 'Norwegian Bokmål',
    'nn': 'Norwegian Nynorsk',
    'oc': 'Occitan',
    'or': 'Oriya',
    'om': 'Oromo',
    'ps': 'Pashto',
    'fa': 'Persian',
    'pt-BR': 'Portuguese (Brazil)',
    'pt-PT': 'Portuguese (Portugal)',
    'pa': 'Punjabi',
    'qu': 'Quechua',
    'rm': 'Romansh',
    'gd': 'Scottish Gaelic',
    'sr': 'Serbian',
    'sh': 'Serbo-Croatian',
    'sn': 'Shona',
    'sd': 'Sindhi',
    'si': 'Sinhala',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'so': 'Somali',
    'st': 'Southern Sotho',
    'es-419': 'Spanish (Latin America)',
    'su': 'Sundanese',
    'sw': 'Swahili',
    'tg': 'Tajik',
    'ta': 'Tamil',
    'tt': 'Tatar',
    'te': 'Telugu',
    'th': 'Thai',
    'ti': 'Tigrinya',
    'to': 'Tonga',
    'tk': 'Turkmen',
    'tw': 'Twi',
    'ug': 'Uighur',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'cy': 'Welsh (Cymraeg)',
    'fy': 'Western Frisian',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    'zu': 'Zulu'
  },
  rtlLanguages: ['ar', 'he', 'ur', 'fa'],
  urlParams: {
    'dropdown' : '', /* dropdown=hidden */
    'language' : '' /* lang code*/
  },
  originalFormElements: [],
  originalDynamicFormElements: [],
  dictionary: {}, //{"id" : "text"}
  simplifiedDictionary: {},
  hasSimplifiedDictionary: !!Object.fromEntries,
  formElements: [],
  dynamicFormElements: [],
  to: '',
  cardTexts: {},
  properties: {},
  browserLang: '',
  translations: {},
  primaryLang: '',
  version: 2,
  inlineOriginalBlots: {},
  inlineOriginalReplacedItems: {},
  getTranslations: function(languages, callback) {
    var self = this;

    var formID = (function() {
      return document.querySelector('.jotform-form').getAttribute('id');
    })();

    if (!languages) {
      languages = [this.properties.primaryLanguage];
    }
    var translationRequest = function(actionName,completeCallback){
      if (document.get.offline_forms == 'true' && document.get.jotformNext == 1) {
        completeCallback({ responseText: JSON.stringify(window[actionName]) })
      } else {
        new Ajax.Request(JotForm.server, {
          parameters: {
            action: actionName,
            formID: formID,
            langCode: languages.join(',')
          },
          method: 'GET',
          onComplete: completeCallback
        });
      }
    }
    translationRequest('getFormTranslations',function(result){
      var translations = null;
      if (result.responseText) {
        var resJSON = JSON.parse(result.responseText);
        if (resJSON.success && resJSON.message) {
          translations = resJSON.message.translations;
          Object.extend(self.translations, translations);
          self.setDictionary();
          self.trimMultiSpaces();
          self.sanitizeKeys();
          self.setBrowserLanguage(resJSON.message.acceptLanguage, languages);
          if(window.FORM_MODE !== 'cardform'){
            callback();
          }
        } else {
          console.log('onError');
        }
      }
      if(window.FORM_MODE && window.FORM_MODE === 'cardform'){
        translationRequest('getCardFormTranslations', function(res){
          var cardTexts = null;
          if (res.responseText) {
            var resJSON = JSON.parse(res.responseText);
            if (resJSON.success) {
              if(resJSON.langs){
                cardTexts = resJSON.langs;
                self.cardTexts = cardTexts;
              }
              callback();
            }
          }
        })
      }
    });
  },
  setBrowserLanguage: function(browserLanguages, formLanguages) {

    try {

      if (!this.properties.detectUserLanguage) return;

      var languageOptions = [];
      var langs = browserLanguages.split(",");
      for(var i=0; i<langs.length; i++) {
        var lang = langs[i].split(";");
        if(lang.length == 1) {
          languageOptions.push({lang: lang[0], weight: 1.0});
        } else {
          languageOptions.push({lang: lang[0], weight: lang[1].replace("q=", "")});
        }
      }

      languageOptions.sort(function(a, b){return b.weight-a.weight});

      var match = false;
      var partialMatch = false;

      for(i = 0; i < languageOptions.length;  i++) {

        var browserLanguage = languageOptions[i].lang;
        if(browserLanguage == "en-US") browserLanguage = "en";

        for(var j=0; j<formLanguages.length; j++) {

          var formLanguage = formLanguages[j];
          if(formLanguage == browserLanguage) {
            match = formLanguage;
            break;
          }

          if(!partialMatch) {
            if(formLanguage && formLanguage.split("-")[0] == browserLanguage.split("-")[0]) {
              partialMatch = formLanguage;
            }
          }

        }

        if(match) break;
      }

      this.browserLang = match ? match : partialMatch;

    } catch(e) {
      console.log(e);
    }

  },
  setInlineFieldOriginals: function(questionElement) {
    var self = this;
    var inlineInputs = questionElement.querySelectorAll('.FITB-inptCont');
    var blots = {};
    if (inlineInputs) {
      inlineInputs.forEach(function (inp) {
        var blotId = inp.getAttribute('data-blot-id');
        if (blotId) {
          blots[blotId] = inp;
        }
      });
    }

    self.inlineOriginalBlots[questionElement.id] = blots;

    var replacedTags = questionElement.querySelectorAll('.fitb-replace-tag');
    var items = {};
    if (replacedTags) {
      replacedTags.forEach(function (tag) {
        var childElement = tag.down('.replaceTag');
        if (childElement) {
          var className = (childElement.getAttribute('class') || '').replace('replaceTag ', '');
          var splitVal = className.split('_');
          if (splitVal.length > 1) {
            var keyValue = className.replace(`${splitVal[0]}_`, '');
            if (splitVal.length > 2) {
              items[`${splitVal[1]}:${keyValue.replace(`${splitVal[1]}_`, '')}`] = tag;
            }
            items[keyValue] = tag;
          }
        }
      });
    }
    self.inlineOriginalReplacedItems[questionElement.id] = items;
  },
  replaceBlotsWithOriginals: function(item, id) {
    var self = this;
    var blots = (id && self.inlineOriginalBlots && self.inlineOriginalBlots[id]) ? self.inlineOriginalBlots[id] : {};
    var blotKeys = Object.keys(blots);

    if (blotKeys.length) {
      blotKeys.forEach(function (blot) {
        var blotElement = item.down(`.FITB-inptCont[data-blot-id="${blot}"]`);
        if (blotElement) {
          blotElement.innerHTML = '';
          blotElement.replaceWith(blots[blot]);
        }
      });
    }
  },
  /**
   * Cache simplify results to avoid calling simplifyfWord all the time.
  */
  setSimplifiedDictionary: function() {
    if (this.hasSimplifiedDictionary) {
      this.simplifiedDictionary = Object.fromEntries(
        Object.entries(this.dictionary)
          .map(([langCode, langDict]) => [
            langCode, 
            Object.fromEntries(
              Object.entries(langDict)
                .map(([wordID, word]) => [
                  wordID,
                  this.simplifyfWord(word)
                ])
              )
          ])
      );
    }
  },
  setDictionary: function() {
    var self = this;
    var translations = this.translations,
        primaryLanguage = this.properties.primaryLanguage,
        _originalLanguage = {},
        dictionary = {};

    if (typeof translations[primaryLanguage] === 'undefined') {
      this.dictionary = dictionary;
      self.setSimplifiedDictionary()
      return false;
    }

    /* checks form fields are actually same with primary language
     * if not it search for primary translations
     * if can not find primary translations, it calls getTranslations and breaks
     */
    var getAllTranslations = false;
    var originalLanguage = (function() {
      var form = $$('.jotform-form')[0];
      var formID = '#' + form.getAttribute('id');
      var inputs = $$(formID + ' .form-line');
      var searchText = null;
      var _originalLanguage = null;
      var langMatches = {};
      var translationValues = (function() {
        var values = {};
        $H(translations).each(function(item) {
          values[item.key] = Object.values(item.value);
        });
        return values;
      })();

      inputs.each(function(input) {
        // don't check complicated fields
        if (['control_textarea', 'control_input'].indexOf(input.getAttribute('data-type')) >= 0) { return; }
        var inputID = '#' + input.getAttribute('id');
        var labels = $$(inputID + ' label');
        if (labels.length <= 0) { return; }
        var label = labels[0];
        var textContent = typeof label.textContent != 'undefined' ? label.textContent : label.innerText;
        textContent = textContent.replace('*', '');
        textContent = textContent.trim();
        if (textContent.length <= 0) { return; }

        $H(translationValues).each(function(translation) {
          if (translation.value.indexOf(textContent) >= 0) {
            if(!(translation.key in langMatches)) {
              langMatches[translation.key] = 1;
            } else {
              langMatches[translation.key]++;
            }
          }
        });
      });

      for(var langMatch in langMatches) {
        if(_originalLanguage == null || langMatches[langMatch] > langMatches[_originalLanguage.key]) {
          _originalLanguage = {
            key: langMatch,
            translation: translations[langMatch]
          };
        }

      }
      if(_originalLanguage == null) {
        _originalLanguage = {
          key: primaryLanguage,
          translation: translations[primaryLanguage]
        }
      }

      return _originalLanguage;
    })();

    $H(originalLanguage.translation).each(function(item) {
      _originalLanguage[translations[primaryLanguage][item.key]] = item.value;
    });
    dictionary[originalLanguage.key] = _originalLanguage;

    $H(translations).each(function(language) {
      var langKey = language.key.trim();
      if (langKey !== originalLanguage.key) {
        dictionary[langKey] = {};
        var langTranslation = language.value;
        $H(langTranslation).each(function(lang) {
          var keyValue = translations[originalLanguage.key][lang.key];
          var key = keyValue ? keyValue.trim() : keyValue;
          dictionary[langKey][key] = lang.value ? lang.value.trim() : lang.value;
        });
      }
    });
    this.dictionary = dictionary;
    self.setSimplifiedDictionary();

  },
  init: function (properties) {
    var self = this;

    this.properties = properties;

    var languages = (function() {
      var options = self.properties.options.split('|');
      var languages = [];
      $A(options).each(function(item) {
        languages.push(self.languages[item]);
      });
      return languages;
    })();

    this.getTranslations(languages, function() {
      self.getUrlParams();
      self.getFormElements();
      self.setOriginalFormElements(self.formElements, self.originalFormElements);
      self.clickEventForDropDown();
      self.choosePrimaryLanguage();
      self.setShowStatus();
      self.setTheme();

      var savedLang = document.readCookie('savedUserLanguage');
      if (!self.urlParams.language) { // url parameter should be prioritized
        if (self.properties.saveUserLanguage && savedLang && typeof self.translations[savedLang] !== 'undefined' && languages.indexOf(savedLang) > -1 ) {
          self.translateToOriginal();
          self.to = document.readCookie('savedUserLanguage');
          self.setFlagForDropDown();
          self.actionTranslation();
          self.setDefaultDir();
          JotForm.runAllCalculations();
        } else if (self.properties.detectUserLanguage === '1') { // Open form in user's browser language
          if (self.properties.options.indexOf(self.languages[self.browserLang]) >= 0) {
            self.translateToOriginal();
            self.to = self.browserLang;
            self.setFlagForDropDown();
            self.actionTranslation();
            self.setDefaultDir();
            JotForm.runAllCalculations();
          }
        }

        /**
         * Set html lang attribute
         * See: https://github.com/jotform/frontend/commit/888e6092677684a6216dde3479c8e4ef921129c8#diff-a45d245d87931b370dd491027db6f5b1a38c098221151fb4a41884d34455df57R31
         * as it uses html lang attribute to fetch the translations later on the form
         * Fixes: #4072439 - https://www.jotform.com/answers/4072439
         */
        document.getElementsByTagName('html')[0].setAttribute('lang', self.to);

        if (window.FORM_MODE === 'cardform') {
          window.CardForm.onFormTranslated();
        }
      } else { // language has provided we should change {text} fields to original ones
        if (typeof self.dictionary[self.to] === 'undefined') {
          self.getTranslations([self.to], function() { 
            self.actionTranslation();
            document.getElementsByTagName('html')[0].setAttribute('lang', self.to);
          });
        } else {
          self.actionTranslation();
          document.getElementsByTagName('html')[0].setAttribute('lang', self.to);
        }
        JotForm.runAllCalculations();
      }
    });

    // Close language dropdown on out-of-scope clicks
    $(document).on('click', function(event) {
      if (event.target != $$('.dd-placeholder')[0]) {
        if (!$('langList').hasClassName('dn')){
          $('langList').addClassName('dn');
        }
      }
    });
  },
  getFormElements: function() {
    var self = this;
    self.formElements = [];
    var labels = $$('label:not(.form-product-container):not(.jfMatrix-inputWrapper):not(.noTranslate)');
    var sublabels = $$('.form-sub-label');
    var newSublabels = $$('.jfField-sublabel');
    var descriptions = $$('.jfQuestion-description');
    var spans = $$('span[id$="_price"], span[id="coupon-header"], span[id="coupon-message"], span[id="subtotal-text"], span[id="tax-text"], span[id="shipping-text"], span[id="total-text"], span.form-item-subtotal, span[id^="collapse-text"], span[class="span_print"], span[class="span_preview"], span[class="form-product-name"], span.form-product-child-label, span[class^="multipleFileUploadLabels"], span[class^="jfDropdown-chip"], span[class^="error-navigation-message"], span.jfProduct-optionLabel');
    
    var inputs = $$('input');
    var textarea = $$('textarea');
    var buttons = $$('button:not(.form-submit-print):not(.form-submit-preview):not([class^="pdff-"])');
    var h1 = $$('h1');
    var h2 = $$('h2');
    var h3 = $$('h3');
    var taxtText = $$('div[id="tax-text"]');
    var subtotalText = $$('div[id="subtotal-text"]');
    var welcomeHeader = $$('div[id^="header_welcomePage"]');
    var subHeader = $$('div[id^="subHeader"]');
    var selects = $$('select:not([dropdown-type="control_language"]):not(.time-dropdown)'); /* dropdowns except control_language */
    var ths = $$('th');
    var hover = $$('div.form-description-content');
    var multipleUploadButton = $$('.qq-upload-button');
    var jfMatrixHeaders = $$('.form-matrix-row-headers, .form-matrix-column-headers');
    var jfMobileMatrixHeaders = $$('.jfMobileMatrix-row');
    var sliderItems = $$('.jfMatrixScale-label, .jfMatrixLabelList-item');
    var jfDropdownOptions = $$('.jfDropdown-optionListItem');
    var cardProgressItems = $$('.cardProgress-seeAll, .cardProgress-middleText', '.cardProgress-goBack-text');
    var progressItems = $$('.jfProgress-itemLabel');
    var paymentItems = $$('.payment-text');
    var paymentTotalNewUI = $$('div[id="total-text"]');
    var cardFormSaclElements = [ // Save&ContinueLater
      '.jfWelcome-sectionInfo-text', '.js-sacl-saved', '.js-sacl-valid-email', '.js-sacl-error', '.js-sacl-textarea',
      '.js-sacl-state-text', '.js-sacl-title', '.js-emailSent-feedback', '.js-saveContinueSendEmail', '.js-sacl-link',
      '.js-sacl-share', '.js-saveContinueTryAgain'
    ];
    var cardFormRatingElements = ['.jfRating-fromText', '.jfRating-toText'];
    var cardFormFileUploadElements = [
      '.jfUpload-button', '.jfUpload-heading.forDesktop', '.jfUpload-heading.forMobile',
      '.jfUpload-subheading .minFileSize', '.jfUpload-subheading .maxFileSize', 'qq-upload-button'
    ];
    var cardFormItemsArr = cardFormSaclElements.concat(cardFormFileUploadElements, cardFormRatingElements);
    var cardFormItems = $$(cardFormItemsArr.join(', '));
    var requiredLegends = $$('legend[id*=requirement_description]');
    var pdfImporterTranslation = $$('[class^="pdffTranslate"]');
    var signatureClearButton = $$('.clear-pad-btn.clear-pad');
    var paymentStaticText = $$('h4.payment_methods_title, #payment-sorting-products-dropdown .dropdown-hint, #payment-sorting-products-dropdown .option, #payment-category-dropdown .dropdown-hint, #payment-category-dropdown .select-content span:first, #payment-category-dropdown .all_selected, #payment-category-dropdown span.selected-values');

    ths = ths.filter(function(e){
      if (e.children.length > 0) {
        if (typeof e.children[0].id != 'undefined' && e.children[0].id && (e.children[0].id == 'coupon-header' || e.children[0].id == 'coupon-message')) {

        } else if(e.up('.form-product-child-table')) {
          return;
        }else {
          return e;
        }
      } else {
        return e;
      }
    });

    inputs = inputs.filter(function(e){
      if (e.up('.form-product-item') && (['checkbox', 'radio', 'hidden'].indexOf(e.getAttribute('type')) > -1) || $(e).hasClassName('form-subproduct-option')) { return; }
      return e;
    });

    selects = selects.filter(function(e) {
      if (e.hasClassName('form-subproduct-quantity')) { return; }
      return e;
    });

    var freeText = $$('div[class="form-html"][id^="text_"]');
    var inlineText = $$('div[class="FITB formRender"][id^="FITB_"]');
    var formErrorMessage = $$('div[class="form-error-message"]');
    self.formElements = self.formElements.concat(
      inlineText, labels, sublabels, inputs, h1, h2, h3, welcomeHeader,subHeader, textarea, buttons, selects, ths, freeText,
      spans, hover, multipleUploadButton, descriptions, newSublabels, jfDropdownOptions, cardProgressItems,
      sliderItems, progressItems, cardFormItems, paymentItems, requiredLegends, jfMobileMatrixHeaders, formErrorMessage, pdfImporterTranslation,
      signatureClearButton, paymentTotalNewUI, taxtText, subtotalText, paymentStaticText
    );
  },
  simplifyfWord: function (word){
    function replaceAll (find, replace, str) {
      while (str.indexOf(find) > -1) {
          str = str.replace(find, replace);
      }
      return str;
    }

    var replaceMap = {
      '&gt;': '>',
      '&lt;': '<',
      '&emsp;': ' ',
      '&nbsp;': ' ',
      '<br>': ' ',
      '&amp;': '&',
      '\n': ' ',
      '\t': ' ',
      '  ': ' ',
    };

    return Object.keys(replaceMap).reduce(function (acc, key){
      return replaceAll(key, replaceMap[key], acc); 
    }, word).strip();
  },
  translate: function (word, compoundHint) {
    if (typeof word !== "string") { return; }
    var self = this;
    var tmpWord = self.simplifyfWord(word);
    if (tmpWord.length <= 0) { return ''; }
    // compound hints can't be translated separately, so translate it first then split & return the searched one
    if (compoundHint && self.dictionary[self.to] && self.dictionary[self.to][compoundHint]) {
      var compoundWord = self.dictionary[self.to][compoundHint];
      var index = compoundHint.split(',').indexOf(tmpWord);
      if (compoundWord && compoundWord.split(',').indexOf(tmpWord) !== -1) {
        return tmpWord;
      }
      return compoundWord.split(',')[index] || '';
    }
    if (typeof self.dictionary[self.to] != 'undefined' && typeof self.dictionary[self.to][tmpWord] != 'undefined' && self.dictionary[self.to][tmpWord]) {
      return self.dictionary[self.to][tmpWord];
    }
    var nbspReplaced = tmpWord.replace(/[\u202f\u00a0]/g, ' ');
    if (tmpWord !== nbspReplaced) {
      return self.translate(nbspReplaced);
    } else {
      for (var language in self.languages){
        var languageCode = self.languages[language];
        if (languageCode !== self.to){
          for (var searchedWord in self.dictionary[languageCode]){
            var compareWord = self.hasSimplifiedDictionary ? self.simplifiedDictionary[languageCode][searchedWord] : self.dictionary[languageCode][searchedWord];
            if (compareWord == tmpWord || (!self.hasSimplifiedDictionary && self.simplifyfWord(compareWord) == tmpWord)){
              if (typeof self.dictionary[self.to] != 'undefined' && typeof self.dictionary[self.to][searchedWord] != 'undefined') {
                return self.dictionary[self.to][searchedWord];
              }
            }
          }
        }
      }
    }
    return word;
  },
  setText: function(e){
    var self = this;
    var type = typeof e.textContent != 'undefined' ? 'textContent' : typeof e.innerText != 'undefined' ? 'innerText' : '';
    var regExp = new RegExp(/<(strong|em|a|\/strong|\/em|\/a)>*/g);
    if (regExp.test(e.innerHTML)) {
      type = 'innerHTML';
    }
    if (e.hasClassName('jfRadio-labelText') || e.hasClassName('jfCheckbox-labelText') || e.hasClassName('jfYesno-label')) {
      var content = e[type];
      var translated = self.translate(content);
    }
    if (e.tagName == 'DIV' && e.getAttribute('class') == 'form-description-content') type = 'innerHTML';
    if (e.tagName == 'DIV' && e.getAttribute('class') == 'jfUpload-heading forDesktop') type = 'innerHTML';
    if (type) {
      if (e.getAttribute('class') == 'form-html' && e.getAttribute('id').match(/^text/)) {
        if (e.id != self.translate(e.id)) {
          e.innerHTML = self.preventXSS(self.translate(e.id));
        } else {
          e.innerHTML = self.preventXSS(self.translate(self.translate(e.innerHTML)));
        }
      } else if (e.hasClassName('FITB') && e.getAttribute('id').match(/^FITB/)) {
        var translationKey = `${e.id}_template`;
        var translatedTemplate = self.translate(translationKey);
        if (translationKey != translatedTemplate) {
          var blots = (self.inlineOriginalBlots && self.inlineOriginalBlots[e.id]) ? self.inlineOriginalBlots[e.id] : {};
          var blotKeys = Object.keys(blots);
          if (blotKeys.length) {
            blotKeys.forEach(function (blotKey) {
              translatedTemplate = translatedTemplate.replace(`{${blotKey}}`, blots[blotKey].outerHTML);
            });
            var replacedTags = (self.inlineOriginalReplacedItems && self.inlineOriginalReplacedItems[e.id]) ? self.inlineOriginalReplacedItems[e.id] : {};
            var rKeys = Object.keys(replacedTags);
            if (rKeys.length) {
              rKeys.forEach(function (rKey) {
                translatedTemplate = translatedTemplate.replaceAll(`{${rKey}}`, replacedTags[rKey].outerHTML);
              });
            }
            e.innerHTML = self.preventXSS(translatedTemplate);
            self.replaceBlotsWithOriginals(e, e.id);

            var inlineInputs = e.querySelectorAll('.FITB-inptCont');
            if (inlineInputs) {
              inlineInputs.forEach(function (inp) {
                var labels = inp.querySelectorAll('label');
                if (labels) {
                  labels.forEach(function (label) {
                    if (label.textContent) {
                      var translatedLabel = self.translate(label.textContent);
                      if (label !== translatedLabel) {
                        label.textContent = translatedLabel;
                      }
                    }
                  });
                }
              });
            }  
          }
        }
      } else {
        var content = e[type];
        if (e.hasClassName('jfQuestion-description')) {
          content = content.replace(/<\/?span[^>]*>/g, '');
        }
        var translated;
        if (e.getAttribute('data-seperate-translate')) {
          translated = content.split(' ').map(function(part) {
            return self.translate(part);
          }).join(' ');
        } else {
          translated = self.translate(content);
        }
        translated = self.preventXSS(translated);

        if(e.hasClassName('form-matrix-row-headers') || e.nodeName == 'OPTION'){
          translated = translated.replaceAll('<br>', '');
        }

        if (content.trim() !== translated.trim()) {
          if (e.parentElement && e.parentElement.hasClassName('jfQuestion-label')) {
            $A(e.children).each(function(e){
              e.remove();
            });
            e.innerHTML = translated;
          } else if(e.querySelector('label') && e.hasClassName('jfMatrixLabelList-item')){
            e.querySelector('label')[type] = translated;
          } else if (e.parentElement && e.parentElement.parentElement && e.parentElement.parentElement.hasClassName('FITB-inptCont')){
            e.innerHTML = translated;
            e.label = translated;
          } else {
            e[type] = translated; // todo: if type is textContent, this causes layout thrashing, which causes large performance issues. fix pls
          }
  
          if(e.hasClassName("form-submit-button")) {
            e.oldText = e[type];
          } 
        }
      }
    }
  },
  setOriginalDynamicFormElements: function() {
    var self = this;
    self.dynamicFormElements = $$('.dynamic-form-element');

    self.setOriginalFormElements(self.dynamicFormElements, self.originalDynamicFormElements);
    self.translateFormElements(self.dynamicFormElements);
  },
  setOriginalFormElements: function(formElementList, originalElementList){
    var self = this;
    var tmpElement = {};
    var matrixColumns = {};
    var isCardForm = window.FORM_MODE === 'cardform';
    $A(formElementList).each(function(e){
      tmpElement = {};
      if (e.id) {
        tmpElement.id = e.id;
        if (e.tagName == 'INPUT') {
          tmpElement.type = 'placeholder';
          tmpElement.placeholder = e.placeholder;
        } else if (e.tagName == 'TEXTAREA' && e.getAttribute('data-customhint')) {
          tmpElement.type = 'placeholder';
          tmpElement.customHint = e.getAttribute('data-customhint');
        } else if (e.tagName === 'LABEL' && e.getAttribute('for')) {
          tmpElement.type = 'label';
          tmpElement.for = e.getAttribute('for');
          tmpElement.html = e.innerHTML;

          if (isCardForm && e.up('li.form-line') && e.up('li.form-line').getAttribute('data-type') === 'control_cardconnect') {
            var cardIndexDiv = e.up('div.jfCard') && e.up('div.jfCard').down('div.jfCard-index');
            tmpElement.cardIndex = (cardIndexDiv && cardIndexDiv.textContent) ? cardIndexDiv.textContent : '';
          }
        } else if (e.getAttribute('class') && e.getAttribute('class').match(/payment-text/g)) {
          tmpElement.id = 'payment-text';
          tmpElement.html = e.innerHTML;
          tmpElement.element = e;
          tmpElement.type = 'payment-text';
        } else if (e.getAttribute('class') && e.getAttribute('class').match(/form-submit-button/g)) {
          tmpElement.type = 'control';
          if (e.oldText && e.innerHTML === JotForm.texts.pleaseWait) {
            tmpElement.html = e.oldText
          } else {
            tmpElement.html = e.innerHTML;
          }
        } else if (e.getAttribute('id') && e.getAttribute('id').match(/^FITB/)) {
          tmpElement.type = 'control';
          tmpElement.html = e.innerHTML;
          self.setInlineFieldOriginals(e);
        } else {
          tmpElement.type = 'control';
          tmpElement.html = e.innerHTML;
        }
        originalElementList.push(tmpElement);
      } else {
        // create an ID for undefined labels
        if (e.tagName == 'DIV' && e.getAttribute('class') == 'form-description-content') {
          tmpElement.id = e.up('li.form-line').id;
          tmpElement.type = 'hover';
          tmpElement.html = e.innerHTML;
          originalElementList.push(tmpElement);
        } else if (e.hasClassName('cardProgress-seeAll') || e.hasClassName('cardProgress-middleText')) {
          tmpElement.id = 'cardProgressItems';
          tmpElement.html = e.innerHTML;
          tmpElement.type = 'cardProgressItems';
          tmpElement.element = e;
          originalElementList.push(tmpElement);
        } else if (e.hasClassName('jfMatrixLabelList-item') || e.hasClassName('jfMatrixScale-label')) {
          tmpElement.id = 'sliderItems';
          tmpElement.html = e.innerHTML;
          tmpElement.type = 'sliderItems';
          tmpElement.element = e;
          originalElementList.push(tmpElement);
        } else  if (e.tagName == 'LI' && e.hasClassName('jfDropdown-optionListItem') && e.parentNode.getAttribute('data-component') !== 'country') {
          tmpElement.id = 'dropdowns';
          tmpElement.html = e.innerHTML;
          tmpElement.element = e;
          tmpElement.type = 'jfDropdownOptions';
          originalElementList.push(tmpElement);
        } else  if (e.tagName == 'TH' && (e.hasClassName('form-matrix-row-headers') || e.hasClassName('form-matrix-column-headers'))) {
          tmpElement.id = e.up('li.form-line').id;
          tmpElement.html = e.innerText;
          tmpElement.element = e;
          tmpElement.type = 'jfMatrixHeaders';
          originalElementList.push(tmpElement);
        } else  if (e.tagName == 'DIV' && (e.hasClassName('payment-text'))) {
          tmpElement.id = 'payment-text';
          tmpElement.html = e.innerHTML;
          tmpElement.element = e;
          tmpElement.type = 'payment-text';
          originalElementList.push(tmpElement);
        } else if (e.hasClassName('payment-text')) {
          tmpElement.id = e.id || 'payment-text';
          tmpElement.html = e.innerHTML;
          tmpElement.element = e;
          tmpElement.type = e.id || 'payment-text';
          originalElementList.push(tmpElement);
        } else if (e.hasClassName('jfRadio') || e.hasClassName('jfCheckbox') || e.hasClassName('jfYesno')) {
          var selectEl = e.hasClassName('jfRadio') ? $(e).down('.jfRadio-labelText') : $(e).down('.jfCheckbox-labelText');
          if (e.hasClassName('jfYesno')) { selectEl = $(e).down('.jfYesno-label'); }
          if(selectEl && !selectEl.hasClassName('jfRadio-otherInputText') && !selectEl.hasClassName('jfCheckbox-otherInputText')) {
            tmpElement.id = e.up('li.form-line').id;
            tmpElement.type = 'radioCheckbox';
            tmpElement.html = selectEl.innerHTML;
            tmpElement.element = selectEl;
            originalElementList.push(tmpElement);
          }
        } else if (e.tagName == 'LABEL') {
          var siblings = $(e).siblings();

          if (siblings.length > 0 && siblings[0].getAttribute('id')) {

            $(e).setAttribute('id', 'label' + '_' + siblings[0].getAttribute('id'));

            tmpElement.id   = e.id;
            tmpElement.type = 'control';
            tmpElement.html = e.innerHTML;

            originalElementList.push(tmpElement);
          } else if (typeof e.up('table.form-scale-table') != 'undefined' && isNaN(e.innerHTML)) {
            tmpElement.id   = '';
            tmpElement['for'] = e.getAttribute('for');
            tmpElement.type = 'scale';
            tmpElement.html = e.innerHTML;

            originalElementList.push(tmpElement);
          }
        } else if (e.tagName == 'LABEL' && e.getAttribute('class') == 'jfField-sublabel') {
          tmpElement.id = $(e).siblings()[0].id;
          tmpElement.type = 'jfSublabel';
          tmpElement.html = e.innerHTML;
          originalElementList.push(tmpElement);
        } else if (e.tagName == 'TH') {
          if (e.getAttribute('class') && e.getAttribute('class').indexOf('form-matrix') > -1) {
            if (e.getAttribute('class').indexOf('form-matrix-column-headers') > -1) {
              // Keep matrix columns in a array to avoid fetching again
              var selector = '.' + e.getAttribute('class').replace(' ', '.');
              if (matrixColumns[selector] === undefined) {
                matrixColumns[selector] = $$(selector);
              }

              // What order of this element in columns to use it in a "nth" selector afterwards
              tmpElement.rank = matrixColumns[selector].indexOf(e);
            } else if (e.getAttribute('class').indexOf('form-matrix-row-headers') > -1) {
              tmpElement.rank = $$('.form-matrix-row-headers').indexOf(e);
            }

            tmpElement.id = '';
            tmpElement['class'] = e.getAttribute('class');
            tmpElement.type = 'matrixTH';
            tmpElement.html = e.innerHTML;

            originalElementList.push(tmpElement);

          } else if (e.children.length === 0 && e.up('.form-address-table')) {
            tmpElement.rank = $$('.form-address-table th').indexOf(e);
            tmpElement.id = '';
            tmpElement.type = 'paymentAddressTH';
            tmpElement.html = e.innerHTML;

            originalElementList.push(tmpElement);
          }
        } else if(e.hasClassName("qq-upload-button")) {
          if(e && e.up(".form-input, .form-input-wide")) {
            tmpElement.html = e.innerHTML;
            tmpElement.type = "multipleButton";
            tmpElement.id = e.up(".form-input, .form-input-wide").id;
            originalElementList.push(tmpElement);
          }
        } else if(e.up('.form-product-child-table') && e.tagName == 'SPAN') {
            tmpElement.rank = $$('.form-product-child-table span').indexOf(e);
            tmpElement.id = '';
            tmpElement.type = 'subProductLabel';
            tmpElement.html = e.innerHTML;
            originalElementList.push(tmpElement);
        } else if(e.tagName == 'BUTTON' && !e.hasClassName('js-saveContinueSendEmail') && !e.hasClassName('js-saveContinueTryAgain')) {
            tmpElement.type = 'actionButtons';
            if(e.up('li.form-line')) {
              tmpElement.id = e.up('li.form-line').id;
            }
            var cardActions = ['forPrev', 'forNext', 'forSubmit', 'forReview', 'forBackToForm'];
            for(var i = 0; i < cardActions.length;  i++) {
              if(e.hasClassName(cardActions[i])) {
                tmpElement.buttonType = cardActions[i];
                break;
              }
            }
            tmpElement.html = e.innerHTML;
            originalElementList.push(tmpElement);
        } else if(isCardForm) {
          tmpElement.id = 'cardFormDefaultTexts';
          tmpElement.html = e.innerHTML;
          tmpElement.type = 'cardFormDefaultTexts';
          tmpElement.element = e;
          originalElementList.push(tmpElement);
        }
      }
    });

    var formTexts = JotForm.texts;

    $H(formTexts).each(function (text) {

      if (typeof text.value !== typeof Function) {
        tmpElement = {};

        tmpElement.id = text.key;
        tmpElement.type = 'formText';
        tmpElement.html = text.value;

        originalElementList.push(tmpElement);
      }

    });

  },
  updateCardTexts: function(property) {
    var self = this;
    var text = property.html;
    if (self.cardTexts &&  self.cardTexts[self.to] &&  self.cardTexts[self.to][text]) {
      var translated = self.cardTexts[self.to][text];
      property.element.innerHTML = translated;
    }
  },
  translateCardTexts: function(word){
    if (typeof word !== "string") { return; }
    var self = this;
    if (self.cardTexts && self.cardTexts[self.to] &&  self.cardTexts[self.to][word]) {
      return self.cardTexts[self.to][word];
    }
  },
  translateElementsToOriginal: function(elements) {
    var self = this;
    elements.each(function(e){
      if (e.id && e.id != 'fill-form') {
        if (e.type == 'control') {
          $$('#' + e.id).each(function(item){
            if(item.tagName === 'SELECT') {
              // Get index of selected option
              var selectedIndex = item.selectedIndex;
            }

            if(item.id !== 'coupon-message')  item.update(e.html);

            if (e.id.match(/^FITB/)) {
              self.replaceBlotsWithOriginals(item, e.id);
            }
            if(item.tagName === 'SELECT' && selectedIndex) {
              // Get options of updated dropdown
              var options = item.options;

              // Set value of dropdown to the previous selected index
              item.value = options[selectedIndex] && options[selectedIndex].value;
            }

          });
        } else if(e.type === 'label') {
          // Check if we are changing correct label by looking for (sublabels of full name/date etc. is not unique)
          $$('#' + e.id + '[for="'+ e.for +'"]').each(function(item){
            if (e.cardIndex) {
              var itemCardIndexDiv = item.up('div.jfCard') && item.up('div.jfCard').down('div.jfCard-index');
              if (itemCardIndexDiv && itemCardIndexDiv.textContent === e.cardIndex) {
                item.update(e.html);
              }
            } else {
              item.update(e.html);
            }
          });
        }
        else if (e.type == 'placeholder' && $(e.id) !== null) {
          if (typeof e.placeholder !== 'undefined') {
            $(e.id).hint(e.placeholder);
          } else if (typeof e.customHint !== 'undefined' && e.customHint !== null) {
            JotForm.setCustomHint(e.id, e.customHint);
          }
        } else if (e.type == 'formText') {
          var text = {};
          text[e.id] = e.html;
          JotForm.alterTexts(text);
        } else if (e.type == 'hover') {
          $$('li#' + e.id + ' div.form-description-content')[0].innerHTML = e.html;
        } else if (e.type == 'jfSublabel' && $$('label[for="' + e['id'] + '"]').length !== 0) {
          $$('label[for="' + e['id'] + '"]')[0].innerHTML = e.html;
        } else if (['jfMatrixHeaders', 'jfDropdownOptions', 'cardProgressItems', 'sliderItems'].indexOf(e.type) !== -1) {
          e.element.innerHTML = e.html;
        } else if (e.type == 'cardFormDefaultTexts') {
          // self.updateCardTexts(e);
        } else if (e.type == 'radioCheckbox') {
          e.element.innerHTML = e.html;
        } else if (e.type == 'actionButtons') {
          var button = $(e.id).down('.'+e.buttonType);
          if(button) {
            button.innerHTML = e.html;
          }
        } else if(e.type == "multipleButton") {
          var button = $(e.id).down(".qq-upload-button");
          if(button) {
            button.update(e.html);
          }
        }
      } else if (e.type == 'matrixTH') {
        if (e['class'] && e['class'].indexOf('form-matrix') > -1) {
          if ($$('.' + e['class'].replace(' ', '.') + ":nth("+e['rank']+")").length > 0) {
            $$('.' + e['class'].replace(' ', '.') + ":nth("+e['rank']+")").first().innerHTML = e.html;
          }
        }
      } else if (e.type == 'paymentAddressTH') {
        var formAddressTable = $$('.form-address-table th')[e.rank];
        if (formAddressTable && formAddressTable.length > 0) {
          formAddressTable.innerHTML = e.html;
        }
      } else if (e.type == 'scale'){
        $$('label[for="' + e['for'] + '"]').last().innerHTML = e.html;
      } else if(e.type === 'subProductLabel') {
        $$('.form-product-child-table span')[e.rank].innerHTML = e.html;
      }
    });
  },
  translateToOriginal: function() {
    var self = this;
    self.translateElementsToOriginal(self.originalFormElements);
    self.translateElementsToOriginal(self.originalDynamicFormElements);

  },
  translateOnlyDynamicElements: function() {
    var self = this;
    self.translateFormElements(self.dynamicFormElements);
  },
  translateFormElements: function(formElementList){
    var self = this;
    $A(formElementList).each(function(e){
      if (e && e.hasClassName && e.hasClassName('noTranslate')) {
        if (JotForm && JotForm.debug) {
          // console.log('will not translate this', e);
        }
      } else if ((e.getAttribute('class') == 'form-html' && e.getAttribute('id').match(/^text/)) || (e.hasClassName('FITB') && e.getAttribute('id').match(/^FITB/))) {
        self.setText(e);
      } else if (e.tagName == 'INPUT') {
        if (typeof e.placeholder !== 'undefined' && e.placeholder.length > 0 && $(e).up('li.form-line')) {
          // if there is a compound int, translate acccording to it
          var dataPlaceholder = (e.dataset.placeholder && typeof self.dictionary[self.to] !== 'undefined' && self.to !== self.properties.primaryLanguage) ? e.dataset.placeholder : e.placeholder;
          e.hint(self.translate(dataPlaceholder, $(e).up('li.form-line').dataset.compoundHint));
        }
      } else if (e.tagName == 'TEXTAREA') {
        var customHint = e.getAttribute('data-customhint');
        if (customHint) {
          var translation = self.translate(customHint);
          JotForm.setCustomHint(e.getAttribute('id'), translation);
        } else if (!!e.placeholder) {
          // translation for placeholder of textarea in card-forms
          var translation = self.translate(e.placeholder);
          e.placeholder = translation;
          var markdown = document.getElementById(e.id + '_editor');
          // is there a markdown editor in textarea
          if (markdown) {
            markdown.dataset.placeholder = translation;
          } else {
            document.getElementById(e.id).dataset.placeholder = translation;
          }
        }
      } else if (e.tagName == 'SELECT') {
        $A(e.options).each(function(o, i){
          if (i === 0 && o.value === "") {
            var formLine = $(e).up('li.form-line');
            var text = self.translate(o.text, formLine ? formLine.dataset.compoundHint : null);
            if (text) o.setText(text);
          }
          self.setText(o);
        });
      } else if (e.tagName == 'DIV' && e.getAttribute('class') == 'form-description-content') {
        self.setText(e);
      } else if(e.hasClassName('jfRadio') || e.hasClassName('jfCheckbox') || e.hasClassName('jfYesno')){
        var element = e.hasClassName('jfRadio') ? $(e).down(".jfRadio-labelText") : $(e).down(".jfCheckbox-labelText");
        if (e.hasClassName('jfYesno')) { element = $(e).down(".jfYesno-label"); }
        if(element && !element.hasClassName('jfCheckbox-otherInputText') && !element.hasClassName('jfRadio-otherInputText')) {
          self.setText(element);
        }
      } else if(e.tagName === 'SPAN' && e.hasClassName('jfProgress-itemLabel')) {
        if(e.originalText === undefined) {
          e.originalText = e.innerHTML;
        }
        e.innerHTML = e.originalText;
        var progressLabels = e.innerHTML.match(/(\d+\.\s)(.*)/);
        if(progressLabels && progressLabels[2]) {
          e.innerHTML = progressLabels[2];
          self.setText(e);
          e.innerHTML = progressLabels[1] + e.innerHTML;
        }
      } else if (e.tagName === 'SPAN' && e.hasClassName('jfQuestion-description')) {
        self.setText(e);
      } else if (e.tagName === 'SPAN' && e.hasClassName('error-navigation-message')) {
        var regExp = new RegExp(/<(strong|em|a|\/strong|\/em|\/a)>*/g);
        if (regExp.test(e.innerHTML)) {
          var strongElement = e.innerHTML.substring(e.innerHTML.indexOf("<"), e.innerHTML.lastIndexOf(">") + 1);
          var translated = self.translate(e.innerHTML.replace(strongElement, "{count}"));
          e.innerHTML = translated.replace("{count}", strongElement);
        }else {
          self.setText(e);
        }
      } else if (e.tagName === 'DIV' && e.hasClassName('qq-upload-button')) {
        if (e.childNodes && e.childNodes[0]) {
          e.childNodes[0].nodeValue = self.translate(e.childNodes[0].nodeValue);
        }
        var jfUploadHeading = e.querySelectorAll(".jfUpload-heading");
        if (jfUploadHeading) {
          for(var i=0;i<jfUploadHeading.length;i++){
            self.setText(jfUploadHeading[i]);
          } 
        }
      } else if (e.querySelector('.replaceTag')) {
        if (e.children.length > 0) {
          var getTagName = function(element) {
            var className = element.className.split(' ')[1];
            var newClassName = '';
            if (className) {
              className = className.split('_').slice(1).join('_');
              className = className.replace(/\_field_/g,"[+]").replace(/\_/g,":");
              if (className.indexOf('[+]') !== -1) {
                className = className.split('+');
                className.forEach((value, key) => {
                  if (Math.abs(key % 2 )  == 1) {
                    var number = value.match(/\d/g).join('');
                    value = value.replaceAll(']'+number,'');
                    value = number + ']' + value;
                  }
                  newClassName += value;
                })
                className = newClassName;
              }
            }
            return className;
          }
          var container = e.querySelector('.jfQuestionLabelContainer') || e;

          var tmpInnerHTML = container.innerHTML;
          $A(container.children).each(function(child) { // Replace spans with tag name
            if (child.hasClassName('replaceTag')) {
              var tagName = getTagName(child);
              if (tagName) {
                tmpInnerHTML = tmpInnerHTML.replace(child.outerHTML, '{' + tagName + '}');
              }
            }
          })
          if (container.querySelector('.form-required')) { // Translate only text part, not with required span
            var requiredPart = container.querySelector('.form-required').outerHTML;
            tmpInnerHTML = tmpInnerHTML.split(requiredPart).map(function(part){
              return self.translate(part);
            }).join(requiredPart);
          } else {
            tmpInnerHTML = self.translate(tmpInnerHTML);
          }
          $A(container.children).each(function(child) { // Replace back tag names with spans
            if (child.hasClassName('replaceTag')) {
              var tagName = getTagName(child)
              if (tagName) {
                tmpInnerHTML = tmpInnerHTML.replace('{' + tagName + '}', child.outerHTML);
              }
            }
          })
          container.innerHTML = tmpInnerHTML;
        }
      } else if (e.tagName === 'LABEL' && e.hasClassName('form-label')) {
        var requiredStar = false;
        if (e.getElementsByClassName('form-required').length > 0) {
          requiredStar = e.getElementsByClassName('form-required')[0].clone(true);
          e.getElementsByClassName('form-required')[0].remove();
        }
        self.setText(e);
        if (requiredStar) {
          e.insert(requiredStar);
        }
      } else {
        if (e.children.length > 0) {
          var tmpElement = e.clone(true);
          var removedChildren = {};
          var tmpElementsChildNodes = Array.from(tmpElement.childNodes);
          if (!e.hasClassName('jfQuestion-label')) {
            $A(tmpElement.children).each(function(el, index){
              removedChildren[index] = tmpElementsChildNodes.indexOf(el);
              el.remove();
            });
            self.setText(tmpElement);
          } else {
            self.setText(tmpElement.children[0]);
          }
          if(e.hasClassName('jfMatrixLabelList-item')){
            self.setText(e);
          }
          if (e.children[0].hasClassName && (e.children[0].hasClassName('form-product-details') || e.children[0].hasClassName('form-required'))) {
            // for product price, insert after text or if label has asterisk (required) element
            tmpElement.insert({bottom: e.children[0]});
          } else if (e.hasClassName('jfQuestion-label') || (e.children[1] && e.children[1].hasClassName && e.children[1].hasClassName('jfRequiredStar'))) {
            if (tmpElement.children[1] && tmpElement.children[1].children) {
              var requiredStar = $A(tmpElement.children[1].children).find(function(el){
                return el.hasClassName && el.hasClassName('jfRequiredStar-message');
              });
              if (requiredStar) {
                self.setText(requiredStar);
              }
            }
          } else {
            Object.keys(removedChildren).forEach(function(key) {
              tmpElement.insertBefore(e.children[0], tmpElement.childNodes[removedChildren[key]]);
            });
          }
          e.innerHTML = tmpElement.innerHTML;
        } else {
          self.setText(e);
        } 
      }
    });
  },
  translateIframeElementsForPayment: function(){
    var sublabel_cc_number = document.querySelector('#sublabel_cc_number')?.textContent;
    var sublabel_cc_ccv = document.querySelector('#sublabel_cc_ccv')?.textContent;
    var sublabel_cc_card_expiry = document.querySelector('#sublabel_cc_card_expiry')?.textContent;

    if(JotForm.stripe){
      if(sublabel_cc_number || sublabel_cc_number == ''){
        JotForm.stripe.updatePlaceHolder(JotForm.stripe.cc_number, sublabel_cc_number);
      }

      if(sublabel_cc_ccv || sublabel_cc_ccv == ''){
        JotForm.stripe.updatePlaceHolder(JotForm.stripe.cc_ccv, sublabel_cc_ccv);
      }

      if(sublabel_cc_card_expiry || sublabel_cc_card_expiry == ''){
        JotForm.stripe.updatePlaceHolder(JotForm.stripe.cc_card_expiry, sublabel_cc_card_expiry);
      }
    }
  },
  actionTranslation: function(){
    var self = this;
    self.translateFormElements(self.formElements);
    self.translateFormElements(self.dynamicFormElements);
    self.translateIframeElementsForPayment();

    var formTexts = JotForm.texts;
    $H(formTexts).each(function (item) {

      var text = {};

      text[item.key] = self.translate(item.value);
      JotForm.alterTexts(text);

    });

    this.translateDateTime();

    // Send "translate" message to form's widgets
    var iframes = document.getElementsByTagName("iframe");
    if (iframes.length > 0) {
      for (var i = 0; i < iframes.length; ++i) {
        if (iframes[i].hasAttribute('id') && iframes[i].id.indexOf('customFieldFrame') !== -1) {
          self.sendTranslateMessageToWidget(iframes[i]);
        }
      }
    }

    // trigger a custom event to re-render self managed fields
    var event;
    if (typeof(Event) === 'function') {
      event = new Event('translationLoad');
    } else {
      event = document.createEvent('Event');
      event.initEvent('translationLoad', false, false);
    }
    document.dispatchEvent(event);
  },
  sendWidgetMessage: function(msg, id, to) {
    var iframeElement = document.getElementById(id);
    
    // If no iframe do not send postmessage
    if (iframeElement === null) {
      return;
    }

    var ref = iframeElement.src;

    // To option is necesaary for messaging between widgets and themes page
    if (to !== undefined) {
      ref = to;
    }

    // Check if IE browser
    if (this.isMSIE()) {
      XD.postMessage(msg, ref, iframeElement);
    } else {
      XD.postMessage(msg, ref, getIframeWindow(iframeElement));
    }
  },
  isMSIE: function() {
    var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return match ? true : false;
  },
  translateDateTime: function() {
    if(!JotForm.calendarMonths) return;

    var months = JotForm.calendarMonths;
    JotForm.calendarMonthsTranslated = [];
    for(var i=0; i<months.length; i++) {
        JotForm.calendarMonthsTranslated.push(this.translate(months[i]));
    }

    var translatedMonths = {};
    var calendarMonths = JotForm.calenderViewMonths;
    if (calendarMonths && typeof calendarMonths === 'object') {
      var calendarMonthKeys = Object.keys(calendarMonths);
      for (var i = 0; i < calendarMonthKeys.length; i++) {
        var key = calendarMonthKeys[i];
        var translatedMonthNames = [];
        var monthNames = calendarMonths[key];
        
        for (var j = 0; j < monthNames.length; j++) {
          translatedMonthNames.push(this.translate(monthNames[j]));
        }
        
        translatedMonths[key] = translatedMonthNames;
      }
    }
    JotForm.calendarViewMonthsTranslated = translatedMonths;

    var translatedDays = {};
    var calendarDays = JotForm.calenderViewDays;
    if (calendarDays && typeof calendarDays === 'object') {
      var calendarDayKeys = Object.keys(calendarDays);
      for (var i = 0; i < calendarDayKeys.length; i++) {
        var key = calendarDayKeys[i];
        var translatedDaysNames = [];
        var dayNames = calendarDays[key];
        
        for (var j = 0; j < dayNames.length; j++) {
          translatedDaysNames.push(this.translate(dayNames[j]));
        }
        
        translatedDays[key] = translatedDaysNames;
      }
    }
    JotForm.calendarViewDaysTranslated = translatedDays;


    if(typeof JotForm.calendarDays != 'undefined') {
      var days = JotForm.calendarDays;
      JotForm.calendarDaysTranslated = [];
      for (var i = 0; i < days.length; i++) {
        JotForm.calendarDaysTranslated.push(this.translate(days[i]));
      }
    }

    if(typeof JotForm.appointmentCalendarDays != 'undefined') {
      var daysAppointment = JotForm.appointmentCalendarDays;
      JotForm.appointmentCalendarDaysTranslated = [];
      for(var i=0; i<daysAppointment.length; i++) {
        JotForm.appointmentCalendarDaysTranslated.push(this.translate(daysAppointment[i]));
      }
    }

    JotForm.calendarTodayTranslated = this.translate(JotForm.calendarOther.today);
  },
  setFlagForDropDown: function(){
    var self = this;
    var dropdown = $$('.dd-placeholder')[0];

    dropdown.setAttribute('class', '');
    dropdown.addClassName('dd-placeholder ' + self.to);

    if($$('.dd-placeholder')[0].innerHTML){
      dropdown.update(self.languages[self.to]);
    }
    self.updateInput();
  },
  updateInput: function() {
    var inputLang = $('input_language');

    if(inputLang) {
      inputLang.setValue(this.languages[this.to]);

      if(inputLang.triggerEvent) {
        inputLang.triggerEvent('keyup');
      }
    }
  },
  clickEventForDropDown: function(){
    var self = this;
    $('langDd').setAttribute('tabindex',0);
    $('langDd').setAttribute('role','combobox');
    $('langDd').setAttribute('aria-label','Language Selection');
    $('langDd').on('keypress',function(e) {
      switch (e.keyCode){
      case 13:
      case 32:
        if(e.target === $('langDd')){
          $('langDd').down().click();
        }
        break;
      default:
        break;
      }
    });
    $('langDd').on('focus',function(e) {
      $('langList').removeClassName('dn');
    });
    $('langList').setAttribute('role','combobox');
    $('langList').setAttribute('aria-label','Language Selection');
    Array.from($('langList').children).map( function(li) {
      li.setAttribute('tabindex',0);
      li.setAttribute('role','option');
      li.on('keypress',function(e) {
        switch (e.keyCode){
        case 13: // enter
        case 32: // space
          e.target.click();
          break;
        default:
          break;
        }
      });
    });

    $$('#langDd div')[0].on('mousedown', function(e){
      $('langList').toggleClassName('dn');
      e.preventDefault();
    });
    $('langList').on('click', function(li){
      $('langList').toggleClassName('dn');


      var selectedIndices = {};
      $$('.form-line').each(function(field) {
        field.select("select").each(function(select) {
          selectedIndices[select.id] = select.selectedIndex;
        });
      });
      self.getFormElements();
      self.translateToOriginal();
      self.to = li.target.getAttribute('data-lang');
      if (window.FORM_MODE === 'cardform') {
        window.CardForm.onFormTranslated();
      }

      document.getElementsByTagName('html')[0].setAttribute('lang', self.to);

      self.setFlagForDropDown();

      var form = $$('.form-all')[0];
      if (self.rtlLanguages.indexOf(self.to) > -1) {
        form.setAttribute('dir', 'rtl');
      } else {
        form.setAttribute('dir', 'ltr');
      }

      self.setPositionDateIcon();

      if (typeof self.dictionary[self.to] === 'undefined') {
        self.getTranslations([self.to], function() {
          self.actionTranslation();
        });
      } else {
        self.actionTranslation();
      }


      if(self.properties.saveUserLanguage) {
        document.createCookie("savedUserLanguage", self.to);
      }

      for(var id in selectedIndices) {
        if ($(id)) {
          $(id).selectedIndex = selectedIndices[id];
        }
      }

      JotForm.runAllCalculations();

    });
  },
  setDefaultDir: function () {
    var self = this;
    var form = $$('.form-all')[0];
    var cardformWelcomeHeader = window.FORM_MODE === 'cardform' ? $$('#header_welcomePage')[0] : null;
    var cardformWelcomeDesc = window.FORM_MODE === 'cardform' ? $$('#subHeader_welcomePage')[0] : null;
    var elements = [form, cardformWelcomeHeader, cardformWelcomeDesc];

    elements.forEach(element => {
      if (!element) return;

      if (self.to && self.rtlLanguages && self.rtlLanguages.indexOf(self.to) > -1) {
        element.setAttribute('dir', 'rtl');
      } else if (element.getAttribute('dir') === 'rtl'){
        element.setAttribute('dir', 'ltr');
      }
    });
  },
  setPositionDateIcon: function() {
    const dateIcon = 'li[data-type="control_datetime"] .jfField-svgWrapper';
    const formWrapper = '.jfForm-all';

    if ($$(dateIcon).length === 0 || $$(formWrapper).length === 0) return;

    const isRTL = $$(formWrapper)[0].getAttribute('dir') === 'rtl';
    const leftValue = isRTL ? '0.75em' : 'auto';
    const rightValue = isRTL ? 'auto' : '0.75em';

    $$(dateIcon).forEach(index => {
      index.setStyle({ left: leftValue, right: rightValue });
    });
  },
  choosePrimaryLanguage: function(){
    var self = this;
    self.to = self.urlParams.language && self.languages[self.urlParams.language] ? self.urlParams.language : self.properties.primaryLanguage;
    self.setFlagForDropDown();
    self.actionTranslation();
    self.setDefaultDir();
    self.setPositionDateIcon();
  },
  setShowStatus: function(){
    var self = this;
    if (typeof self.properties.showStatus != 'undefined') {
      if (self.properties.showStatus == 'Flag & Text') {

      } else if (self.properties.showStatus == 'Text Only') {
        /*
        $('langDd').insert('<style id="langDdCss">.lang-list li:before {background:none;}.dd-placeholder:before {background:none;}.lang-list li {text-align:center;padding-left:0;}.dd-placeholder{padding-left:16px;}</style>')
        */
        //$('langList').addClassName("only-nation");
        var element = $$('.cont')[0] ? $$('.cont')[0] : $$('.jfTranslation')[0];
        element.addClassName('only-nation');
      } else if (self.properties.showStatus == 'Flag Only') {
        $$('#langList li').invoke('update', '');
        $$('#langDd div')[0].update('');
        $$('div[id="langDd"]')[0].setStyle({ 'min-width': 'auto' });
        $$('ul[id="langList"] li').each(function (li) {
          li.addClassName('only-flag');
        });
      }
    }
    if($$('#langList li').length > 1 && typeof self.urlParams.dropdown != 'undefined' && self.urlParams.dropdown != 'hidden'){
      $('langDd').show();
    }
  },
  setTheme: function(){
    var self = this;

    if (typeof self.properties.theme != 'undefined') {

      if (self.properties.theme == 'light-theme') {
        $('langList').addClassName('light');
      } else if (self.properties.theme == 'dark-theme'){
        $('langList').addClassName('dark');
      }
    } else {
      $('langList').addClassName('dark');
    }

  },
  trimMultiSpaces: function(){
    var dictionary = this.dictionary;
    var newKey;
    $H(this.dictionary).each(function(lang){
      $H(lang.value).each(function(e){
        newKey = e.key.replace(/\s+/gim, ' ').strip();
        if (newKey != e.key) {
          dictionary[lang.key][newKey] = e.value;
          delete dictionary[lang.key][e.key];
        }
      });
    });
  },
  sanitizeKeys: function(){
    var dictionary = this.dictionary;
    var newKey;
    $H(this.dictionary).each(function(lang){
      $H(lang.value).each(function(e){
        newKey = e.key.replace(/^\s+|\s+$/g, '').strip();
        newKey = newKey.replace(/&gt;/g, '>').strip();
        newKey = newKey.replace(/&lt;/g, '<').strip();
        newKey = newKey.replace(/<br>/g, '').strip();
        newKey = newKey.replace(/\s+/gim, ' ').strip();
        if (newKey != e.key) {
          dictionary[lang.key][newKey] = e.value;
          delete dictionary[lang.key][e.key];
        }
      });
    });
  },
  preventXSS: function(html){
    var events = 'javascript|FSCommand|onAbort|onActivate|onAfterPrint|onAfterUpdate|onBeforeActivate|onBeforeCopy|onBeforeCut|onBeforeDeactivate|onBeforeEditFocus|onBeforePaste|onBeforePrint|onBeforeUnload|onBeforeUpdate|' +
    'onBegin|onBlur|onBounce|onCellChange|onChange|onClick|onContextMenu|onControlSelect|onCopy|onCut|onDataAvailable|onDataSetChanged|onDataSetComplete|onDblClick|onDeactivate|onDrag|onDragEnd|onDragLeave|onDragEnter|' +
    'onDragOver|onDragDrop|onDragStart|onDrop|onEnd|onError|onErrorUpdate|onFilterChange|onFinish|onFocus|onFocusIn|onFocusOut|onHashChange|onHelp|onInput|onKeyDown|onKeyPress|onKeyUp|onLayoutComplete|onLoad|onLoseCapture|' +
    'onMediaComplete|onMediaError|onMessage|onMouseDown|onMouseEnter|onMouseLeave|onMouseMove|onMouseOut|onMouseOver|onMouseUp|onMouseWheel|onMove|onMoveEnd|onMoveStart|onOffline|onOnline|onOutOfSync|onPaste|onPause|onPopState|' +
    'onProgress|onPropertyChange|onReadyStateChange|onRedo|onRepeat|onReset|onResize|onResizeEnd|onResizeStart|onResume|onReverse|onRowsEnter|onRowExit|onRowDelete|onRowInserted|onScroll|onSeek|onSelect|onSelectionChange|' +
    'onSelectStart|onStart|onStop|onStorage|onSyncRestored|onSubmit|onTimeError|onTrackChange|onUndo|onUnload|onURLFlip|seekSegmentTime';

    return html.replace(new RegExp('<(.*?)\\s+[^<]*(' + events + ')(\\s+||)(=|:)[^<]*>','gim'), '<$1>');
  },
  getUrlParams: function() {
    var self = this;
    var pl     = /\+/g,  // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); },
      query  = window.location.search.substring(1),
      match = search.exec(query);
    while (match) {
        self.urlParams[decode(match[1])] = decode(match[2]);
        match = search.exec(query);
    }
  },
  sendTranslateMessageToWidget: function(frame) {
    var self = this;

    var sendTranslateMessage = function () {
      var message = {
        type: "translate",
        id: frame.id,
        dictionary: self.dictionary,
        to: self.to,
        success: true
      };
      self.sendWidgetMessage(JSON.stringify(message), frame.id);
    };

    // if widget is ready send immediately 
    if (frame.hasClassName('frame-ready')) {
      sendTranslateMessage(frame.id);
      return;
    }

    // if widget is not ready, send when it is ready
    var Observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    if (typeof Observer === "undefined") return;
    if (frame.dataset.observed === "true") return;

    new Observer(function (_mutationsList, observer) {
      if (frame.hasClassName('frame-ready')) {
        sendTranslateMessage(frame.id);
        observer.disconnect();
      }
    }).observe(frame, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
      characterData: false
    });
    frame.dataset.observed = "true";
  }
};
