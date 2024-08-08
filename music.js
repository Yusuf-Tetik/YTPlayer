class Music
{
    constructor(title, singer, img, file)
    {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName()
    {
        return this.title + " - " + this.singer;
    }
}

const musicList = 
[
    new Music("Yol Gözümü Dağlıyor","Hayko Cepkin","1.jpg","1.mp3"),
    new Music("Another Bring In The Wall","Pink Floyd","2.jpg","2.mp3"),
    new Music("Broken Bones","Kaleo","3.jpg","3.mp3")

];