import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SunnyIcon from '@mui/icons-material/Sunny';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info})  {
    const INIT_URL = 
    "https://tse4.mm.bing.net/th?id=OIP.R3W3VaIWund2nkpYW0_z5QHaEN&pid=Api&P=0&h=180";
  const HOT_URL=
  "https://in.images.search.yahoo.com/images/view;_ylt=AwrKBGaLXi9o7f8KBGm9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzQxNjY5OTA3M2U2Nzg3YmEyNTc3NGQ4NDM4NjlmZjhlBGdwb3MDMjgEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dhot%2Bweather%26type%3DE210IN1357G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D28&w=2560&h=1701&imgurl=www.gardenzeus.com%2Fwp-content%2Fuploads%2Fshutterstock_360422789-scaled.jpg&rurl=https%3A%2F%2Fwww.gardenzeus.com%2Fhot-weather-gardening-part-2-mindset-acclimation%2F&size=472KB&p=hot+weather&oid=416699073e6787ba25774d843869ff8e&fr2=piv-web&fr=mcafee&tt=Hot+Weather+Gardening+Part+2%3A+Mindset+and+Acclimation&b=0&ni=21&no=28&ts=&tab=organic&sigr=37kU6EamRY2y&sigb=zEXX_plMMSBo&sigi=cti3dyp0QvZB&sigt=TLkLHidNOv4I&.crumb=U4.Edd.SHTT&fr=mcafee&fr2=piv-web&type=E210IN1357G0";
  const COLD_URL="https://in.images.search.yahoo.com/images/view;_ylt=AwrKBGbeXi9ohI8KjKy9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzQ5YWIzNThiNTQzZTZiMDZkZGQ2NTdmYTUyNjJlMWE2BGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dcold%2Bweather%26ei%3DUTF-8%26type%3DE210IN1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D1&w=1600&h=1066&imgurl=www.findingtheuniverse.com%2Fwp-content%2Fuploads%2F2017%2F01%2FBlue2Bhour2BFinland_by_Laurence2BNorah.jpg&rurl=https%3A%2F%2Fwww.findingtheuniverse.com%2Ftips-cold-weather-photography%2F&size=216KB&p=cold+weather&oid=49ab358b543e6b06ddd657fa5262e1a6&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Cold+Weather+and+Winter+Photography+Tips+-+Finding+the+Universe&b=0&ni=160&no=1&ts=&tab=organic&sigr=tId0fJfasJG5&sigb=JCyXuIhAFohw&sigi=xXo2WSVqDjov&sigt=kuTMLch6U2p2&.crumb=U4.Edd.SHTT&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210IN1357G0";
  const RAIN_URL="https://in.images.search.yahoo.com/images/view;_ylt=AwrPpkIdXy9ooQspYSK9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzk1NDEyZGI3NmJhZGNkZjJmYmIwYTY4NmQ1ODNlY2E5BGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Drainy%2Bweather%26ei%3DUTF-8%26type%3DE210IN1357G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D1&w=1749&h=980&imgurl=static.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F042%2F146%2F565%2Fnon_2x%2Fai-generated-beautiful-rain-day-view-photo.jpg&rurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Frainy-weather&size=189KB&p=rainy+weather&oid=95412db76badcdf2fbb0a686d583eca9&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Rainy+Weather+Stock+Photos%2C+Images+and+Backgrounds+for+Free+Download&b=0&ni=160&no=1&ts=&tab=organic&sigr=443bJX7Gjvua&sigb=U3ruLqrRdhPp&sigi=Z2h8Viq61_dF&sigt=1Rx0JmN4kQfG&.crumb=U4.Edd.SHTT&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210IN1357G0";
  
    return(
        <div className="InfoBox">
            
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        // image={
        //     info.humidity>80 
        //     ? RAIN_URL 
        //     : info.temp>15 
        //     ? HOT_URL 
        //     :AcUnitIcon
        // }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
         {
           
            info.humidity>80 
            ? RAIN_URL 
            : info.temp>15 
            ? HOT_URL 
            :COLD_URL
        }
        
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp= {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>
            The weather can be described as <i>{info.weather}</i>and feels like 
            {info.feelslike}&deg;C
          </p>
       </Typography>
      </CardContent>
      </Card>
            </div>
            
            
            </div>
    );

};