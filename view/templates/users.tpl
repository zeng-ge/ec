doctype html
html(lang='en')
    head
        meta(charset='UTF-8')
        title Users
    body
        //
            Often you might want large blocks of text within a tag. A good example is with inline scripts or styles.
            To do this, just add a . after the tag
        div.
            =users[1].name
        //Since it's a common use case, you can put text in a tag just by adding it inline after a space.
        div =users[1].name
        div
            =users[1].name
        ul
            //The simplest way of adding plain text to templates is to prefix the line with a | character
            each user in users
                li
                    a(class='btn btn-default', href='users/user?id='+user._id)
                        |user name:
                        =user.name
        -var flag = true
        if flag
            p test expression
