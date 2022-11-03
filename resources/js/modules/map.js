import $ from 'jquery';

const map = () => {
  if ($('.contacts').length) {
    // $('.contacts .item').each(function () {
    //   let id = `map${$(this).index()}`;
    //   $(this).find('.map').attr('id', id);

    //   let latitude = +$(this).attr('data-lat');
    //   let longitude = +$(this).attr('data-lng');

    // });

    function initMap() {
      $('.contacts .item').each(function () {
        let id = `map${$(this).index()}`;
        $(this).find('.map').attr('id', id);

        let latitude = +$(this).attr('data-lat');
        let longitude = +$(this).attr('data-lng');

        const item = { lat: latitude, lng: longitude };

        const map = new google.maps.Map(document.getElementById(id), {
          zoom: 14,
          center: item,
        });

        const marker = new google.maps.Marker({
          position: item,
          map: map,
          icon: './img/icons/mark.png',
        });
      });
    }

    window.initMap = initMap;
  }
};

export default map;
