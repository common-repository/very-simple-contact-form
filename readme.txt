=== VS Contact Form ===
Contributors: Guido07111975
Version: 16.3
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html
Requires PHP: 7.0
Requires at least: 5.0
Tested up to: 6.6
Stable tag: 16.3
Tags: simple, contact, form, contact form, email


With this lightweight plugin you can create a contact form.


== Description ==
= About =
With this lightweight plugin you can create a contact form.

To display your form you can use a block, a shortcode or a widget.

Form contains fields for Name, Email, Subject and Message. Also included are a sum field (to avoid abuse) and a privacy consent checkbox.

You can customize your form via the settings page or by adding attributes to the block, the shortcode or the widget.

It's also possible to display form submissions in your dashboard.

= How to use =
After installation add the VS Contact Form block or the shortcode `[contact]` to a page to display your form.

You can also go to Appearance > Widgets and use the VS Contact Form widget.

= Settings page =
You can customize your form via the settings page. This page is located at Settings > VS Contact Form.

Settings and labels can be overridden when using the relevant attributes below.

This can be useful when having multiple contact forms on your website.

= Attributes =
You can also customize your form by adding attributes to the block, the shortcode or the widget. Attributes will override the settings page.

Misc:

* Add custom CSS class to form: `class="your-class-name"`
* Change email address for sending: `email_to="your-email-address"`
* Send to multiple email addresses (max 5): `email_to="first-email-address, second-email-address"`
* Change "From" email header: `from_header="your-email-address"`
* Change subject in email: `subject="your subject"`
* Change subject in auto-reply email to sender: `subject_auto_reply="your subject"`

Field labels:

* Name: `label_name="your label"`
* Email: `label_email="your label"`
* Subject: `label_subject="your label"`
* Message: `label_message="your label"`
* Privacy consent: `label_privacy="your label"`
* Submit: `label_submit="your label"`

Field placeholders:

* Name: `placeholder_name="your placeholder"`
* Email: `placeholder_email="your placeholder"`
* Subject: `placeholder_subject="your placeholder"`
* Message: `placeholder_message="your placeholder"`

Field error labels:

* Name: `error_name="your label"`
* Email: `error_email="your label"`
* Subject: `error_subject="your label"`
* Sum: `error_sum="your label"`
* Message: `error_message="your label"`
* Message - more than 1 link is not allowed: `error_message_has_links="your label"`
* Message - links are not allowed: `error_message_has_links="your label"`
* Message - email addresses are not allowed: `error_message_has_email="your label"`
* Banned words: `error_banned_words="your label"`
* Privacy consent: `error_privacy="your label"`

Messages:

* Displayed when sending succeeds: `thank_you_message="your message"`
* Displayed in the auto-reply email to sender: `auto_reply_message="your message"`

Example: `[contact email_to="your-email-address" subject="your subject" label_submit="your label"]`

When using the block or the widget, don't add the main shortcode tag or the brackets.

Example: `email_to="your-email-address" subject="your subject" label_submit="your label"`

= Display form submissions in dashboard =
Via the settings page you can activate form submissions being displayed in your dashboard.

After activation go to menu item "Submissions". Your form submissions will be listed here.

= SMTP =
SMTP (Simple Mail Transfer Protocol) is an internet standard for sending emails.

By default, WordPress uses the PHP `mail()` function for sending emails. But when using SMTP there's less chance your form submissions are being marked as spam.

You must install an additional plugin for this, such as [WP mail SMTP](https://wordpress.org/plugins/wp-mail-smtp/).

= Cache =
If you're using a caching plugin and want to avoid conflicts with the contact form, I recommend excluding your contact page from caching. This can be done via the settings page of most caching plugins.

= Have a question? =
Please take a look at the FAQ section.

= Translation =
Translations are not included, but the plugin supports WordPress language packs.

More [translations](https://translate.wordpress.org/projects/wp-plugins/very-simple-contact-form) are very welcome!

The translation folder inside this plugin is redundant, but kept for reference.

= Credits =
Without help and support from the WordPress community I was not able to develop this plugin, so thank you!


== Frequently Asked Questions ==
= How do I set plugin language? =
The plugin will use the website language, set in Settings > General.

If translations are not available in the selected language, English will be used.

= What is the default email address? =
By default form submissions will be send to the email address set in Settings > General.

You can change this via the settings page or by using an attribute.

= Why is the "from" email address not from sender? =
I have used a default "From" email header to avoid form submissions being marked as spam.

Best practice is using a "From" email header (an email address) that ends with your website domain.

The default "From" email header starts with "wordpress" and ends with your website domain.

You can change this by using an attribute.

Your reply to sender will use another email header, called "Reply-To", which is the email address that sender has filled in.

= Can I display multiple forms on the same page? =
Do not add multiple blocks, shortcodes or widgets to the same page. This might cause a conflict.

But you can display a form by using the block or the shortcode and a form by using the widget.

= Can I add extra fields to form? =
If you want extra fields you should use another contact form plugin, such as [WPForms](https://wordpress.org/plugins/wpforms-lite/).

= Why does form submission fail? =
An error message is displayed if plugin was unable to send form. Or nothing seems to happen.

* Install an SMTP plugin and try again
* If you are using an SMTP plugin, check the settings page of that plugin for mistakes
* With most SMTP plugins you can test the mail function by sending a test mail
* Disable caching and try again
* Check the built-in anti-spam features, by activating debugging via the settings page

Sometimes form submission fails because your hosting provider has disabled the PHP `mail()` function. Sending via SMTP will solve this.

For more info about SMTP check the "SMTP" section above.

For more info about caching check the "Cache" section above.

= Why do I not receive form submissions? =
* Check the junk/spam folder of your mailbox
* If you are using attributes, check your attributes for mistakes
* Check the settings page for disabled email sending or a wrong email address
* Install an SMTP plugin and try again
* If you are using an SMTP plugin, check the settings page of that plugin for mistakes
* With most SMTP plugins you can test the mail function by sending a test mail
* Install another contact form plugin to determine whether it's caused by VS Contact Form or not

For more info about SMTP check the "SMTP" section above.

= Does this plugin have anti-spam features? =
Of course, the default WordPress validating, sanitizing and escaping functions are included.

Also included are a sum field, hidden honeypot fields and a hidden time trap.

And you can limit the number of links and email addresses that is allowed in Message field.

= Does this plugin meet the conditions of the GDPR? =
The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for all individuals within the European Union.

I did my best to meet the conditions of the GDPR:

* Form contains a privacy consent checkbox
* You can disable collection of IP address
* Form submissions are safely stored in database, similar to how the default posts and pages are stored
* You can easily delete form submissions

= Why is there no semantic versioning? =
The version number won't give you info about the type of update (major, minor, patch). You should check the changelog to see whether or not the update is a major or minor one.

= How can I make a donation? =
You like my plugin and want to make a donation? There's a PayPal donate link at my website. Thank you!

= Other questions or comments? =
Please open a topic in the WordPress.org support forum for this plugin.


== Changelog ==
= Version 16.3 =
* Minor changes in code

= Version 16.2 =
* Fix: detect email address in Message field
* Minor changes in code

= Version 16.1 =
* Fix: typo

= Version 16.0 =
* Minor changes in code

= Version 15.9 =
* New: add a maximum of 5 email addresses for sending via the settings page
* You can still use the email_to attribute to override this

= Version 15.8 =
* New: VS Contact Form block
* Block editor users can now replace their shortcode block with the VS Contact Form block

= Version 15.7 =
* Fix: "From" email header

= Version 15.6 =
* Fix: replaced parse_url() with wp_parse_url()

= Version 15.5 =
* Replaced most of the $_SERVER instances with default WP function
* This will fix an undefined array key warning (in some cases)

= Version 15.4 =
* Improved validation

For all versions please check file changelog.


== Screenshots ==
1. Form (GeneratePress theme)
2. Form (GeneratePress theme)
3. Form widget (GeneratePress theme)
4. Widget (dashboard)
5. Settings page (dashboard)
6. Settings page (dashboard)
7. Settings page (dashboard)
8. Settings page (dashboard)
9. Settings page (dashboard)
10. Form submissions page (dashboard)