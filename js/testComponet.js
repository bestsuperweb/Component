/*
* test Component 1 
* 
* NJ
* 27/4/2015
*/
var testComponent = function (options) {
    
    /* Tab ID, preview content and Container */
    this.tab = options.tab;
	this.container = options.container;
    this.content = options.content;
    
    /* initialize component generator */
    this.generator = new madCreator({
        id : 26
    });
    
    /* define the data structure if its empty */
    this.data = Object.keys(options.data).length != 0 ? options.data : {'text':'','textarea':'','select':'','radio':'radio 1','checkboxes':[],'image':''};
    
    /* @NOTE set structure to pref */
    this.generator.setPrefStructure(this.data);
    
    this.render();
}

testComponent.prototype.render  = function () {
    
    /* used to replace this when it is not accessible in a function */
    var _this = this;
    
    /* Generate input text */
    var text = this.generator.getInput({
        'title' : {
            'title' : 'Input Text'
        },
        'input' : {
            'type' : 'text',
            'value' : this.data.text
        },
        'event' : {
            'type' : 'keyup',
            'callback' : function () {
                $('#testComponent').html('You are typing in input text now : <br>' + $(this).val());
                console.log($(this).val());
            }
        },
        'setPref' : {
            'type' : 'keyup',
            'target' : 'text'
        }
    });
    
    /* Generate textarea */
    var textarea = this.generator.getTextArea({
        'title' : {
            'title' : 'Textarea Title'
        },
        'input' : {
            'value' : this.data.textarea,
            'class' : 'js-textarea'
        },
        'event' : {
            'type' : 'keyup',
            'callback' : function () {
                $('#testComponent').html('You are typing in textarea now : <br>' + $(this).val());
                console.log($(this).val());
            }
        },
        'setPref' : {
            'type' : 'keyup',
            'target' : 'textarea'
        }
    });
    
    /* Generate button */
    var button = this.generator.getButton({
        'title' : {
            'title' : ''
        },
        'input' : {
            'value' : 'Click Me'
        },
        'event' : {
            'type' : 'click',
            'callback' : function () {
                $('#testComponent').html('You clicked on button, value ' + $(this).val());
                console.log($('.js-textarea[rel='+_this.tab+']').val());
            }
        }
    });
    
    /* Generate dropdown */
    var selects = this.generator.getSelect({
        'title' : {
			'title' 	: 'Select',
            'tooltip' : {
                'title' : 'Select Titlte',
                'desc' : 'Select Description.'
            }
		},
		'input' : {
            'value' : this.data.radio,
			'options'	: [
				{text : 'opt 1', value : 'val 1'},
				{text : 'opt 2', value : 'val 2'}
			]
		},
        'event' : {
            'type' : 'change',
            'callback' : function () {
                $('#testComponent').html('You have selected option ' + $(this).val());
                console.log($(this).val());
            }
        },
        'setPref' : {
            'type' : 'change',
            'target' : 'select'
        }
    });
    
    /* Generate checkboxes */
    var checkboxes = this.generator.getCheckboxes({
        'input' : {
            'value' : this.data.checkboxes,
            'checkboxes' : [
                {'text' : ' selection one', 'value' : 'check 1'},
                {'text' : ' selection two', 'value' : 'check 2'}
            ]
        },
        'event' : {
            'type' : this.data.select,
            'callback' : function () {
                $('#testComponent').html('You clicked on checkbox ' + $(this).val());
                console.log($(this).val());
            }
        },
        'setPref' : {
            'type' : 'click',
            'target' : 'checkboxes'
        }
    });
    
    /* Generate radio buttons */
    var radios = this.generator.getRadios({
        'input' : {
            'value' : 'radio 2',
            'radio' : [
                {'text' : ' selection one', 'value' : 'radio 1', 'name' : 'radio'},
                {'text' : ' selection two', 'value' : 'radio 2', 'name' : 'radio'}
            ]
        },
        'event' : {
            'type' : 'click',
            'callback' : function () {
                $('#testComponent').html('You selected radio ' + $(this).val());
                console.log($(this).val());
            }
        },
        'setPref' : {
            'type' : 'click',
            'target' : 'radio'
        }
    });
    
    var file = this.generator.getFile({
        'title' : {
            'title' : 'Upload File'
        },
        'input' : {},
        'event' : {
            'type' : 'change',
            'callback' : function () {
                
                $('#testComponent').html('You choosed file ' + $(this).val());
                
                /* Html5 file 
                * https://developer.mozilla.org/en/docs/Using_files_from_web_applications
                * https://scotch.io/tutorials/use-the-html5-file-api-to-work-with-files-locally-in-the-browser
                *
                * scotch.io provided a easy to understand description and examples
                * For more info, please refer to mozilla
                */
                console.log(this.files);
            }
        }
    });
    
    var custom = this.generator.getCustom({
        'title' : {
            'title' : 'Custom Title'
        },
        'input' : 'Custom can be anything from text, to html tag <input type="text" value="HTML Input"/> and many more.'
    });
    
    var image = this.generator.getImages({
        'title' : {
            'title' : 'Image'
        },
        'name' : 'image',
        'src' : this.data.image,
        'tab' : this.tab,
        'addCallback' : function () {},
        'removeCallback' : function () {},
        'setPref' : {
            'target' : 'image'
        }
    });
    
    var divider = this.generator.getDivider();
    
    var section = this.generator.section({
        'title' : {
            'title' : 'Section'
        },
        'input' : [text,textarea,button],
        'expandable' : {
            'content' : 'show'
        }
    });
    var section2 = this.generator.section({
        'input' : [custom,image]
    });
    
    /* Generate input text */
    var text2 = this.generator.getInput({
        'title' : {
            'title' : 'Input Text'
        },
        'input' : {
            'type' : 'text',
            'value' : this.data.text
        },
        'event' : {
            'type' : 'keyup',
            'callback' : function () {
                $('#testComponent').html('You are typing in input text now : <br>' + $(this).val());
                console.log($(this).val());
            }
        },
        'setPref' : {
            'type' : 'keyup',
            'target' : 'text'
        }
    });
    /* Popup Panel */
    /*
    var panel = this.generator.getPanel({
        'title' : 'test',
        'class' : 'popupPaneltest',
        'input' : [text2]
    });
    */
    /* Generate button */
    /*
    var popupbutton = this.generator.getButton({
        'title' : {
            'title' : ''
        },
        'input' : {
            'value' : 'Click Me'
        },
        'event' : {
            'type' : 'click',
            'callback' : function () {
                panel.style.display = 'block';
            }
        }
    });
    */
    
    this.container.append(section);
    this.container.append(divider);
    this.container.append(selects);
    this.container.append(checkboxes);
    this.container.append(radios);
    this.container.append(divider);
    this.container.append(file);
    this.container.append(divider);
    this.container.append(section2);
    this.container.append(divider);
    //this.container.append(popupbutton);
    
    /* Create your content */
    this.content.append('<div id="testComponent" style="background:white;width:100%;height:100%;"></div>');
}

