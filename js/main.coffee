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

$(document).ready ->

  # When user clicks
  $( 'button' ).click ->
    
    # Take the input
    originalMessage = $( 'input' ).val()
    # and split it into words at each space.
    messageAsArray = originalMessage.split( ' ' )

    # Define lists as empty
    accidentsList = []
    dirtyWordsFound = []

    # Get current time for inbox preview
    currentTime = new Date(Date.now())
    currentHour = ('0' + currentTime.getHours()).slice -2
    currentMins = ('0' + currentTime.getMinutes()).slice -2
    time = currentHour + ':' + currentMins

    # Check each dirty word
    $.each dirtyWords, (dirtyIndex, dirtyValue) ->
      
      # against each input word
      $.each messageAsArray, (messageIndex, messageValue) ->
        
        # to see if the input word starts with it
        if messageValue.toLowerCase().startsWith(dirtyValue)
        
          # Give a truncated example of the subject line gone wrong
          exampleAccident = messageAsArray.slice(0, messageIndex).join(' ') + ' ' + dirtyValue + '...'
          # Add word to list
          dirtyWordsFound.push dirtyValue
          # Add example to list
          accidentsList.push exampleAccident

          # If there are any examples
          if accidentsList.length

            # set the results text to something negative
            $('.results__heading').text('Uh oh')
            $('.results__explanation').text('You might have a problem')

            # and show the first example in the inbox preview
            $('.inbox').fadeIn()
            $('.inbox__subject').text(exampleAccident)
            $('.inbox__time').text(time)

    # If there are no bad words found
    if accidentsList.length == 0
      
      # set the results heading to something positive
      $('.results__heading').text('You good')
      $('.results__explanation').text('Everything looks fine')

      # and show the full subject line in the inbox preview
      $('.inbox').fadeIn()
      $('.inbox__subject').text(originalMessage)
      $('.inbox__time').text(time)