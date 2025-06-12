function HSVtoHex(h, s, v) {

  if( h<0 ) h=0;
  			if( s<0 ) s=0;
  			if( v<0 ) v=0;
  			if( h>=360 ) h=359;
  			if( s>1 ) s=1;
  			if( v>1 ) v=1;
  			C = v*s;
  			hh = h/60.0;
  			X = C*(1.0-Math.abs((hh%2)-1.0));
  			r = g = b = 0;
  			if( hh>=0 && hh<1 )
  			{
  				r = C;
  				g = X;
  			}
  			else if( hh>=1 && hh<2 )
  			{
  				r = X;
  				g = C;
  			}
  			else if( hh>=2 && hh<3 )
  			{
  				g = C;
  				b = X;
  			}
  			else if( hh>=3 && hh<4 )
  			{
  				g = X;
  				b = C;
  			}
  			else if( hh>=4 && hh<5 )
  			{
  				r = X;
  				b = C;
  			}
  			else
  			{
  				r = C;
  				b = X;
  			}
  			m = v-C;
  			r += m;
  			g += m;
  			b += m;
  			r *= 255.0;
  			g *= 255.0;
  			b *= 255.0;
  			r = Math.round(r);
  			g = Math.round(g);
  			b = Math.round(b);
  			return "#" + (r*65536+g*256+b).toString(16,6);
}
