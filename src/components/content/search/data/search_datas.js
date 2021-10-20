import Album1 from '../../../../images/album_1.png'
import Album2 from '../../../../images/album_2.png'
import Album3 from '../../../../images/album_3.png'
import Album4 from '../../../../images/album_4.png'
import Album5 from '../../../../images/album_5.png'
import Album6 from '../../../../images/album_6.png'
import Album7 from '../../../../images/album_7.png'
import Album8 from '../../../../images/album_8.png'
import Album9 from '../../../../images/album_9.png'
import Album10 from '../../../../images/album_10.png'
import Album11 from '../../../../images/album_11.png'
import Album12 from '../../../../images/album_12.png'
import Album13 from '../../../../images/album_13.png'
import Album14 from '../../../../images/album_14.png'
import Album15 from '../../../../images/album_15.png'
import Album16 from '../../../../images/album_16.png'
import Album17 from '../../../../images/album_17.png'
import Album18 from '../../../../images/album_18.png'
import Album19 from '../../../../images/album_19.png'
import Album20 from '../../../../images/album_20.png'
import Album21 from '../../../../images/album_21.png'

const random_color = () => {
    const random_Items = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let colorName = '#';
    for(let i=0; i<6; i++) {
        const random = random_Items[Math.floor(Math.random() * random_Items.length)];
        colorName+=random;
    }
    return colorName
}



const datas = [
    { name: 'Podcasts', image: Album1, color: random_color()},
    { name: 'Made for you', image: Album2, color: random_color()},
    { name: 'New Singles', image: Album3, color: random_color()},
    { name: 'Rap', image: Album4, color: random_color()},
    { name: 'Pop', image: Album5, color: random_color()},
    { name: 'Rock', image: Album6, color: random_color()},
    { name: 'Playlists', image: Album7, color: random_color()},
    { name: 'Covers', image: Album8, color: random_color()},
    { name: 'Hits', image: Album9, color: random_color()},
    { name: 'Premier Leauge', image: Album10, color: random_color()},
    { name: 'SeriA', image: Album11, color: random_color()},
    { name: 'UCL', image: Album12, color: random_color()},
    { name: 'UEL', image: Album13, color: random_color()},
    { name: 'Bundes Liga', image: Album14, color: random_color()},
    { name: 'Leauge 1', image: Album15, color: random_color()},
    { name: 'Cinematic', image: Album16, color: random_color()},
    { name: 'Romantic', image: Album17, color: random_color()},
    { name: 'Comedy', image: Album18, color: random_color()},
    { name: 'Development', image: Album19, color: random_color()},
    { name: 'Frontend', image: Album20, color: random_color()},
    { name: 'Radio', image: Album21, color: random_color()},
    { name: 'Bit', image: Album4, color: random_color()},
    { name: 'Artik', image: Album9, color: random_color()},
    { name: 'Ulan', image: Album7, color: random_color()},
    { name: 'Nereye', image: Album3, color: random_color()},
    { name: 'Kadar', image: Album10, color: random_color()},
    { name: 'Sürecek', image: Album8, color: random_color()},
    { name: 'Sonunda', image: Album2, color: random_color()},
]

export default datas