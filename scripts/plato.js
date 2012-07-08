/*
 * ##### Sasson - advanced drupal theming. #####
 *
 * SITENAME scripts.
 *
 */

(function($) {

  Drupal.behaviors.categoryList = {
    attach: function(context) {
      $('.category-menu li').hover(
        function() {
          var level = $(this).parent().attr('class');
          var start = level.indexOf('level-');
          level = parseInt(level.substr(start+6, 1), 10) + 1;
          $(this).children('ul.level-' + level).show('fast');
        },
        function() {
          $(this).children('ul').hide('fast');
        }
      );
    }
  };

  Drupal.behaviors.watcher = {
    attach: function(context) {
      $('.watcher_node:not(.watcher_node_watched) a').html(Drupal.t('Follow'));
      $('.watcher_node.watcher_node_watched a').html(Drupal.t('Unfollow'));
    }
  };

  // DUPLICATE AND UNCOMMENT
  // Drupal.behaviors.behaviorName = {
  //   attach: function (context, settings) {
  //     // Do some magic...
  //   }
  // };

})(jQuery);
