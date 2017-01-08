// Created by Adam Kovalchuk...

var sampleComponent = function(options){

	/* Tab ID, preview content and Container */
    this.tab = options.tab;
	this.container = options.container;
    this.content = options.content;
    
    /* initialize component generator */
    this.generator = new madCreator({
        id : 26
    });
    
    /* define the data structure if its empty */
    this.data = Object.keys(options.data).length != 0 ? options.data : {
        'panelButtonColor': '#285989',
        'contentBackground': '#FFFFFF',
        'textColor': '#FFFFFF',
        'showScroll': false,
        'showHeading': false,
        'get': 'user',
        'userName': 'bobolove223',
        'tagName': 'love'
    };
    
    /* @NOTE set structure to pref */
    this.generator.setPrefStructure(this.data);
    
    this.render();

}

sampleComponent.prototype.render = function(){
	/* used to replace this when it is not accessible in a function */
    var _this = this;

    /* Generate radio buttons */
    var radios = this.generator.getRadios({
        'input' : {
            'radio' : [
                {'text' : ' Username', 'value' : 'user', 'name' : 'get' + this.tab, 'id': 'username-radio'},
                {'text' : ' Hashtag', 'value' : 'tagged', 'name' : 'get' + this.tab},
                {'text' : ' Username + Hashtag ', 'value' : 'both', 'name' : 'get' + this.tab}
            ]
        },
        'event' : {
            'type' : 'click',
            'callback' : function () {
            	hustag.style.display = 'none';
            	username.style.display = 'none';
            	switch ( $(this).val() ){
            		case "user":
            			username.style.display = 'block';
            			break;
            		case "tagged":
            			hustag.style.display = 'block';
            			break;
            		case "both":
            			hustag.style.display = 'block';
            			username.style.display = 'block';
            			break;            		
            	}                
            }
        },
        'setPref' : {
            'type' : 'click',
            'target' : 'get'
        }
    });
    
    var username = this.generator.getInput({
        'title' : {
            'title' : 'Instagram Username'
        },
        'input' : {
            'type' : 'text',
            'value' : this.data.userName,
            'placeholder' : 'mobileads'
        },
        'event' : {
            'type' : 'keyup',
            'callback' : function () {
                $('#sampleComponent').html('You are typing in input text now : <br>' + $(this).val());
                console.log($(this).val());
            }
        },
        'setPref' : {
            'type' : 'keyup',
            'target' : 'userName'
        }
    });
    
    var hustag = this.generator.getInput({
        'title' : {
            'title' : 'Instagram Hustag'
        },
        'input' : {
            'type' : 'text',
            'value' : this.data.tagName,
            'placeholder' : '#mobile'
        },
        'event' : {
            'type' : 'keyup',
            'callback' : function () {
                $('#sampleComponent').html('You are typing in input text now : <br>' + $(this).val());
                console.log($(this).val());
            }
        },
        'setPref' : {
            'type' : 'keyup',
            'target' : 'tagName'
        }
    });

    hustag.style.display = 'none';

    var checkboxes = this.generator.getCheckboxes({
    	'input' : {
            'value' : this.data.checkboxes,
            'checkboxes' : [
                {'text' : ' Enable Scroll Load More ', 'value' : 'check 1'},
                {'text' : ' Hide header ', 'value' : 'check 2'}
            ]
        },
        'event' : {
            'type' : 'click',
            'callback' : function () {
                $('#sampleComponent').html('You clicked on checkbox ' + $(this).val());
                console.log($(this).val());
                if ($(this).val() == 'check 1'){
                    _this.data.showScroll = $(this).is(':checked');
                }
                if ($(this).val() == 'check 2'){
                    _this.data.showHeading = $(this).is(':checked');
                }
            }
        },
        'setPref' : {
            'type' : 'click',
            'target' : 'checkboxes'
        }
    });


    var bgcolor_header = this.generator.getInput({
        'title' : {
            'title' : 'Background Color for Header & Follow Button'
        },
        'input' : {
            'type' : 'text',
            'value' : this.data.panelButtonColor,
            'placeholder' : '#285989'
        },
        'event' : {
            'type' : 'keyup',
            'callback' : function () {
                $('#sampleComponent').html('You are typing in input text now : <br>' + $(this).val());
                console.log($(this).val());
            }
        },
        'setPref' : {
            'type' : 'keyup',
            'target' : 'panelButtonColor'
        }
    });

    var bgcolor_feed = this.generator.getInput({
        'title' : {
            'title' : 'Background Color of Feed Content'
        },
        'input' : {
            'type' : 'text',
            'value' : this.data.contentBackground,
            'placeholder' : '#FFFFFF'
        },
        'event' : {
            'type' : 'keyup',
            'callback' : function () {
                $('#sampleComponent').html('You are typing in input text now : <br>' + $(this).val());
                console.log($(this).val());
            }
        },
        'setPref' : {
            'type' : 'keyup',
            'target' : 'contentBackground'
        }
    });

    var txtcolor_feed = this.generator.getInput({
        'title' : {
            'title' : 'Text Color of Feed Content'
        },
        'input' : {
            'type' : 'text',
            'value' : this.data.textColor,
            'placeholder' : '#FFFFFF'
        },
        'event' : {
            'type' : 'keyup',
            'callback' : function () {
                $('#sampleComponent').html('You are typing in input text now : <br>' + $(this).val());
                console.log($(this).val());
            }
        },
        'setPref' : {
            'type' : 'keyup',
            'target' : 'textColor'
        }
    });

    // var divider = this.generator.getDivider({});

    var section_1 = this.generator.section({
        'title' : {
            'title' : 'Instagram Feed'
        },
        'input' : [radios, username, hustag, checkboxes],
        'expandable' : {
            'content' : 'show'
        }
    });

    var section_2 = this.generator.section({
    	'title' : {
            'title' : 'Look & Feel'
        },
        'input' : [bgcolor_header, bgcolor_feed, txtcolor_feed],
        'expandable' : {
            'content' : 'show'
        }
    });

    $( section_1 ).closest( 'div.innerSection' ).find( 'div.section' ).css({
        display: 'block',
        overflow: 'initial'
    });

    $( section_2 ).closest( 'div.innerSection' ).find( 'div.section' ).css({
        display: 'block',
        overflow: 'initial'
    });
    
    this.container.append(section_1);
    this.container.append(section_2);

    this.content.append('<div id="sampleComponent" style="background:white;width:100%;height:100%;"></div>');
    
    $('input[name='+'get' + this.tab +']').eq(0).prop('checked', true);
}