'use client'
import { NEXT_PUBLIC_NAVER_KEY } from '@/lib/constants';
import Script from 'next/script'
import { useRef } from 'react';

export type NaverMap = naver.maps.Map;

export default function page() {
    const lng = 37.4995096
    const lat = 127.0674214;
    const mapRef = useRef<NaverMap | null>(null);
    const initializeMap = () => {
        const location = new naver.maps.LatLng(lng, lat);
        const mapOptions = {
            center: new window.naver.maps.LatLng(location),
            zoom: 17,
            minZoom: 9,
            scaleControl: false,
            mapDataControl: false,
            logoControlOptions: {
                position: naver.maps.Position.BOTTOM_LEFT,
            },
        };
        const map = new window.naver.maps.Map('map', mapOptions);
        const marker = new naver.maps.Marker({
            map: map,
            position: location
        });
        const infowindow = new naver.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:10px;">그 사랑교회</div>'
        });
        infowindow.open(map, marker);
    }
    return (
        <>
            <Script
                strategy="afterInteractive"
                type="text/javascript"
                src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NEXT_PUBLIC_NAVER_KEY}`}
                onReady={initializeMap}
            />
            <div id='map' style={{ width: '100%', height: '400px' }} />
        </>
    )
}