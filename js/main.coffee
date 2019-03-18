# List of dirty words
dirtyWords = [
  'amcik'
  'anal'
  'andskota'
  'anus'
  'anus'
  'arschloch'
  'arse'
  'ass'
  'ayir'
  'azzhole'
  'ball'
  'balls'
  'bastard'
  'bate'
  'bitch'
  'bloody'
  'blow'
  'boff'
  'boiolas'
  'bollock'
  'boner'
  'boob'
  'breast'
  'buceta'
  'bugger'
  'bum'
  'butt'
  'cabron'
  'cazzo'
  'chink'
  'chraa'
  'chuj'
  'cipa'
  'clit'
  'cock'
  'coon'
  'crap'
  'cuck'
  'cum'
  'cunt'
  'dam'
  'damn'
  'daygo'
  'dego'
  'dick'
  'dike'
  'dildo'
  'dirsa'
  'dom'
  'dupa'
  'dyke'
  'dyke'
  'dziwka'
  'ejac'
  'enculer'
  'enema'
  'faen'
  'fag'
  'fanny'
  'fart'
  'fat'
  'feces'
  'felch'
  'fitt'
  'fitta'
  'fuck'
  'fudge'
  'gay'
  'god'
  'gook'
  'guiena'
  'hack'
  'handy'
  'hell'
  'helvete'
  'ho'
  'hoe'
  'homo'
  'honkey'
  'hore'
  'hui'
  'injun'
  'jack'
  'jap'
  'jerk'
  'jism'
  'jizz'
  'kanker'
  'kawk'
  'kike'
  'klootzak'
  'knob'
  'knulle'
  'kraut'
  'kunt'
  'kurac'
  'kurwa'
  'kusi'
  'kyrpa'
  'labia'
  'les'
  'lesbian'
  'lesbo'
  'lez'
  'lip'
  'merd'
  'mibun'
  'mofo'
  'mother'
  'muff'
  'muie'
  'mulkku'
  'muschi'
  'nastt'
  'nazi'
  'nepesaurio'
  'nig'
  'nut'
  'orga'
  'paki'
  'pecker'
  'penis'
  'perse'
  'phuk'
  'picka'
  'pierdol*'
  'pillu*'
  'pimmel'
  'pimp'
  'piss'
  'pizda'
  'polack'
  'poon'
  'poop'
  'porn'
  'preteen'
  'prick'
  'pube'
  'puke'
  'pula'
  'pule'
  'puss'
  'pussy'
  'puta'
  'puto'
  'qahbeh'
  'quee'
  'queef'
  'queer'
  'rautenberg'
  'rectum'
  'retard'
  'sadist'
  'scank'
  'schaffer'
  'scheiss'
  'schlampe'
  'schlong'
  'schmuck'
  'screw'
  'scrotum'
  'semen'
  'sex'
  'sharmuta'
  'sharmute'
  'shart'
  'shat'
  'shemale'
  'shipal'
  'shit'
  'shiz'
  'skank'
  'skribz'
  'skurwysyn'
  'slut'
  'smegma'
  'smut'
  'sob'
  'sphencter'
  'spic'
  'spierdalaj'
  'splooge'
  'spunk'
  'suka'
  'teets'
  'teez'
  'teste'
  'testicle'
  'tit'
  'toss'
  'tosser'
  'tranny'
  'turd'
  'twat'
  'vagina'
  'vittu'
  'vulva'
  'wank'
  'wanker'
  'wetback'
  'whore'
  'wop'
  'xx'
  'yed'
]


defineResults = ($heading, $explanation, $state) ->
  $('.results').attr('class', 'results results--' + $state)
  $('.results__heading').text($heading)
  $('.results__explanation').text($explanation)

defineInbox = ($subject, $time) ->
  $('.inbox__subject').text($subject)
  $('.inbox__time').text($time)

# Fade in results div
showResults = ($duration) ->
  setTimeout (->
    $('.results').fadeIn()
  ), $duration

# Fade in inbox preview
showInbox = ($duration) ->
  setTimeout (->
    $('.inbox').fadeIn()
  ), $duration

durationShort = 150
durationMedium = 300

# Get params from URL
getParameterByName = (name, url) ->
  if !url
    url = window.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
  results = regex.exec(url)
  if !results
    return null
  if !results[2]
    return ''
  decodeURIComponent results[2].replace(/\+/g, ' ')

urlSubject = getParameterByName('subject')

checkUrl = ->
  if urlSubject != ('' || null)
    console.log(urlSubject)
    $('input').val(urlSubject)
    $( '.form__button' ).trigger('click')



$(document).ready ->

  $( '.form__button' ).click ->

    # Fade out old inbox preview and results box
    $('.inbox').fadeOut(durationShort)
    $('.results').fadeOut(durationShort)

    originalMessage = $( 'input' ).val()


    if originalMessage == ''

      setTimeout (->
        defineResults('Hmm...', 'You can’t just send nothing.', 'danger')
        showResults(durationShort)
      ), durationMedium

    else

      # Reset lists
      accidentsList = []
      dirtyWordsFound = []

      # Split input into words at each space
      messageAsArray = originalMessage.split( ' ' )

      # Get current time for inbox preview
      currentTime = new Date(Date.now())
      currentHour = ('0' + currentTime.getHours()).slice -2
      currentMins = ('0' + currentTime.getMinutes()).slice -2
      time = currentHour + ':' + currentMins

      setTimeout (-> # Delay everything so boxes don't change before disappearing

        $.each dirtyWords, (dirtyIndex, dirtyValue) -> # Check each dirty word
          
          $.each messageAsArray, (messageIndex, messageValue) -> # against each input word
            
            if messageValue.toLowerCase().startsWith(dirtyValue) # to see if the input word starts with it

              dirtyWordsFound.push dirtyValue # Add word to list

              # Give a truncated example of the subject line gone wrong and add it to list
              exampleAccident = messageAsArray.slice(0, messageIndex).join(' ') + ' ' + dirtyValue + '...'
              accidentsList.push exampleAccident

              if accidentsList.length # If there are any subject line examples
                defineInbox(exampleAccident, time)
                showInbox(0)
                defineResults('Uh oh', 'Does that look right to you?', 'danger')
                showResults(durationShort)

        if accidentsList.length == 0 # If there are no bad words found
          defineInbox(originalMessage, time)
          showInbox(0)
          defineResults('All clear', 'That’s a nice looking subject line!', 'success')
          showResults(durationShort)

      ), durationMedium


  checkUrl()